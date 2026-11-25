[![make.fun · news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/herusetiawan27/news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/herusetiawan27/news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)

# news-image-20261125

One image that sums up 25 November 2026's world news — a newspaper front page,
"The World Today", Tuesday 25 November 2026.

Run `node main.ts` and it writes the image byte-identically to
`/output/entry.png`. No network access at runtime: the image ships in this
repository as `entry.png` (1024x1024) and the entrypoint copies it to the
output path, checking the PNG signature and the 1 MiB size limit first.

## The day's stories

All six stories happened or were first reported on Tuesday 25 November 2026:

- **SHENZHOU-24 BLASTS OFF** — China's Shenzhou-24 lifts off from Jiuquan; Pakistani pilot Zeeshan Ali is the first foreign astronaut aboard Tiangong (Reuters, 25 Nov 2026)
- **AUSTRALIA SAYS SORRY TO LGBTQ VETERANS** — Canberra formally apologises for decades of discrimination against LGBTQ service members (Reuters, 25 Nov 2026)
- **ASIAN STOCKS TUMBLE ON TARIFF THREAT** — Fresh US tariff probe sinks chip-heavy markets; Seoul down 5.3%, Taipei 5.1%, Nikkei 2.9% (Reuters, 25 Nov 2026)
- **AUSTRALIA INFLATION JUMPS TO 4.9%** — October CPI hits 4.9%, the highest in three years, fuelling fears of another rate hike (The Guardian / Wall Street Journal, 25 Nov 2026)
- **UK ENERGY BILLS SET TO SOAR** — Ofgem confirms the January price cap up 26%; a typical bill rises to £2,166 a year (BBC, 25 Nov 2026)
- **GOLD SLIPS AS FED HIKE BETS BUILD** — Spot gold eases to $3,544.54 ahead of US inflation data as a December Fed hike looks near-certain (Reuters, 25 Nov 2026)

## Files

- `main.ts` — entrypoint: copies `entry.png` to `/output/entry.png`
- `entry.png` — the front-page image itself (1024x1024 PNG, under 1 MiB)
- `LICENSE` — MIT

## Bounty

https://make.fun/bounty/news-image-20261125
