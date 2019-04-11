# Chinese Font Minifier
font-spider

## Steps
1. Copy all Chinese type needed for the website and paste into corresponding html files
2. Put the original font file to the directory
3. Use css `@font-face` to load font file
*Must use .tff format*
```css
 @font-face {
    font-family: 'SentyTEA';
    src: url('./SentyTEA.ttf#font-spider') format('truetype');
    font-weight: normal;
    font-style: normal;
}
```
4. Run `$ font-spider ./filename.html`
