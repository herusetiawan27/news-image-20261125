// news-image-20261125 — entry validator and copier.
// Checks the entry.png next to this file is really a 1024x1024 PNG
// of at most 1 MiB, then reproduces it byte for byte at /output/entry.png.
// Pure local work: no network, no randomness, deterministic output.
import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
} from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const EXPECTED_WIDTH = 1024;
const EXPECTED_HEIGHT = 1024;
const MAX_BYTES = 1024 * 1024;
const PNG_MAGIC = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
const OUT_DIR = "/output";
const OUT_PATH = join(OUT_DIR, "entry.png");

const here = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(here, "entry.png");

function die(message: string): never {
  throw new Error(`entry.png invalid: ${message}`);
}

// Pull width/height out of the IHDR chunk after the basic shape checks.
function inspectPng(bytes: Buffer): { width: number; height: number } {
  if (bytes.length < 24) {
    die(`file is only ${bytes.length} bytes, too short to be a PNG`);
  }
  if (bytes.length > MAX_BYTES) {
    die(`file is ${bytes.length} bytes, over the ${MAX_BYTES} byte limit`);
  }
  const signature = Buffer.from(PNG_MAGIC);
  if (!bytes.subarray(0, 8).equals(signature)) {
    die("first 8 bytes are not the PNG signature");
  }
  const firstChunk = bytes.subarray(12, 16).toString("ascii");
  if (firstChunk !== "IHDR") {
    die(`first chunk is "${firstChunk}", expected "IHDR"`);
  }
  const width = bytes.readUInt32BE(16);
  const height = bytes.readUInt32BE(20);
  if (width !== EXPECTED_WIDTH || height !== EXPECTED_HEIGHT) {
    die(`dimensions are ${width}x${height}, expected ${EXPECTED_WIDTH}x${EXPECTED_HEIGHT}`);
  }
  return { width, height };
}

function main(): void {
  if (!existsSync(sourcePath)) {
    die(`file not found at ${sourcePath}`);
  }
  const original = readFileSync(sourcePath);
  const { width, height } = inspectPng(original);

  mkdirSync(OUT_DIR, { recursive: true });
  copyFileSync(sourcePath, OUT_PATH);

  const copied = readFileSync(OUT_PATH);
  if (!copied.equals(original)) {
    throw new Error("copy check failed: /output/entry.png differs from source");
  }
  console.log(`OK ${OUT_PATH} — ${original.length} bytes, ${width}x${height}`);
}

main();
