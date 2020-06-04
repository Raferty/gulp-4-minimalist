# Gulp 4 minimalist

Minimalist сборка на основе Gulp 4

### Установка npm-модулей
```bash
npm install
```
**Запуск проекта**
```bash
npm run start
```
**Запуск тестов**
```bash
npm run test
```
**Сборка для продакшна**
```bash
npm run build
```
**Linter styles fix**
```bash
npm run stylelint-fix
```
**Linter scripts fix**
```bash
npm run eslint-fix
```
## Tasks

список используемых тасков

### sync

**Description:**
browser sync

**Dependencies:**
```bash
npm install --save-dev browser-sync
```

### fonts

**Description:**
create woff and woff2 font types

**Dependencies:**
```bash
npm install --save-dev gulp-ttf2woff2 gulp-ttf2woff
```

### html

**Description:**
minimize html for production

**Dependencies:**
```bash
npm install --save-dev gulp-plumber gulp-mode gulp-htmlmin gulp-file-include
```

### images

**Description:**
minimize images by pngquant for png, imageminMozjpeg for jpg, gifsicle for gif, svgo for svg, create webp

**Dependencies:**
```bash
npm install --save-dev gulp-imagemin imagemin-pngquant imagemin-mozjpeg gulp-webp
```

### scripts

**Description:**
babel, concat all scripts, add sourcemaps, rename, uglify for production

**Dependencies:**
```bash
npm install --save-dev gulp-mode gulp-sourcemaps gulp-babel @babel/core @babel/preset-env gulp-concat gulp-uglify gulp-rename gulp-eslint eslint-config-standard eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node
```

### styles

**Description:**
lint css, concat all css, add autoprefixes, add sourcemaps, rename, minify for production

**Dependencies:**
```bash
npm install --save-dev gulp-mode node-sass gulp-sass gulp-sourcemaps gulp-concat gulp-cssnano gulp-autoprefixer gulp-rename stylelint gulp-stylelint stylelint-scss stylelint-config-standard stylelint-config-standard-scss
```

### vendors

**Description:**
babel, concat all scripts, add sourcemaps, rename, uglify for production

**Dependencies:**
```bash
npm install --save-dev gulp-mode gulp-sourcemaps gulp-babel @babel/core @babel/preset-env gulp-concat gulp-uglify gulp-rename
```

### clean

**Description:**
clean dist folder

**Dependencies:**
```bash
npm install --save-dev del
```