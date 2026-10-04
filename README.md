# Hanja Trainer

A phone-friendly quiz app for Korean words, organised by the hanja they come from (currently 소, 사, 산, 살, 삼 and 상: 51 hanja, 165 words).

- Home screen groups hanja by syllable; tap one to see its words, tick several to quiz just those.
- Question types: 한국어 → English, English → 한국어, and **Word → which hanja?** (homophones like 所/小/消 make this the real test), or a mix.
- Formats: multiple choice or flashcards. Weak and new words are asked first.
- Progress is saved on the device (localStorage), per hanja+word.
- Installable (PWA) and works offline after the first load.

## Adding words
Edit `data.js`. Add a line to a group's `words`, or copy a whole group block for a new hanja:

```js
{ hanja: "三", reading: "삼", meaning: "three", words: [["삼월", "March"]] },
```

Existing progress is kept. (Or send me the next Word file and I'll convert it.)

## Putting it on your phone
1. Merge to `main`, then in the repo go to **Settings → Pages → Source: GitHub Actions**. The included workflow publishes it at `https://<user>.github.io/Hanja/`.
2. Open that URL on your phone → browser menu → **Add to Home Screen** (iOS: Share → Add to Home Screen).

Run locally: `python3 -m http.server` and open http://localhost:8000.
