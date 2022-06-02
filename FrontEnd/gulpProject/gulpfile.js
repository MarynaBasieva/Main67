'use strict'

const { task } = require('gulp');

let gulp  = require('gulp'),
    less = require('gulp-less'),
    browserSync = require('browser-sync').create(),
    concat = require('gulp-concat'),
    uglifujs = require('gulp-uglifyjs'),
    rename = require('gulp-rename'),
    cssnano = require('gulp-cssnano'),
    del = require('del'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    cache = require('gulp-cache'),
    autoprefixer = require('gulp-autoprefixer'),
    spritesmith = require('gulp.spritesmith');



gulp.task('mytask', gulp.series(function (){
    console.log('Привіт');
}));

/*Less*/
  let to_less = done =>{
      return gulp.src('app/less/**/*.less')
          .pipe(concat('main.css'))
          .pipe(less())
          .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade:true}))
          .pipe(gulp.dest('app/css'))
          .pipe(browserSync.stream())+
          console.log('main.less с конвертований і обїєднаний і успішно с конвертований з файлами css і перенесені в папку app')+
          done();
  }
/*Less*/


/*Browser Sync*/
   let browser_sync =  done =>{
       browserSync.init({
           server:{
               baseDir: './app'
           },
       });
       console.log('Сервер запущений');
       done();
   }
/*Browser Sync*/


/*Scripts*/
  let scripts = done =>{
      return gulp.src([
          './app/libs/jquery/dist/jquery.min.js',
          './app/libs/magnific-popup/dist/jquery.magnific-popup.min.js',
      ])
          .pipe(concat('libs.min.js'))
          .pipe(uglifujs())
          .pipe(gulp.dest('./app/js'))+
          console.log('js - файли бібліотек для frond end успішно звязані і мініфіковані')+
          done();
  };
/*Scripts*/


/*Css libs*/
   let css_libs = done =>{
           return gulp.src('./app/css/libs.css')
           .pipe(cssnano())
           .pipe(rename({suffix:'.min'}))
           .pipe(gulp.dest('.app/css'))+
           console.log('libs.css мініфікован')  +
           done();
   }
/*Css libs*/


/*Watch*/
let watch =()=>{
    gulp.watch('.app/less/**/*.less', to_less);
    gulp.watch('./app/*.html').on('change',  browserSync.reload);
    gulp.watch('./app/js/**/*.js').on('change',  browserSync.reload);
    console.log('Відслідковує файли активовано');
};
/*Watch*/

/*Clean*/
  let clean = done =>{
      return del.sync('dist')+
      console.log('Папка dist видалена...')+
      done();
  }
/*Clean*/

/*Clear cache if change images directory*/
 let clear = done =>{
     return cache.clearAll() + console.log('Кеш успішно очищений...')+
     done();
 }
/*Clear cache if change images directory*/

/*Sprite for images*/
let sprite = ()=>{
    let spriteData = gulp.src('./app/sprite/*.png')
        .pipe(spritesmith({
            imgName: 'sprite.png',
            cssName:'sprite.css',
        }));
    return spriteData.pipe(gulp.dest('./app/img/sprite'));
};
/*Sprite for images*/

/*Optimize img*/
let img = done=>{
    return gulp.src('./app/img/**/*')
            .pipe(cache(imagemin({
                interced:true,
                progressive:true,
                svgPlugins:[{removeViewBox:false}],
                use:[pngquant]
            })))
            .pipe(gulp.dest('dist/img'))+
        console.log('Изображения успешно оптимизированы..')+
        done();
};
/*Optimize img*/

/*Build*/
   let build = done =>{
       let buildCss = gulp.src('./app/css/**/*')
       .pipe(gulp.dest('dist/css'));

       let buildFonts = gulp.src('./app/fonts/**/*')
       .pipe(gulp.dest('dist/fonts'));

       let buildJs = gulp.src('./app/js/**/*')
       .pipe(gulp.dest('dist/js'));

       let buildLess = gulp.src('./app/less/**/*')
      .pipe(gulp.dest('dist/less'));

       let buildHtml = gulp.src('./app/*.html')
       .pipe(gulp.dest('dist'));

       let buildVendor = gulp.src('./app/vendore/**/*')
       .pipe(gulp.dest('dist/vendore'));

       console.log('Проект готовий. Тепер можна заливати його на сервер...');
       done();
   }
/*Build*/

gulp.task('browser-sync', browser_sync);
gulp.task('less', to_less);
gulp.task('css-libs', gulp.series(to_less, css_libs));
gulp.task('scripts', scripts);
gulp.task('clean', clean);
gulp.task('clear', clear);
gulp.task('sprite', sprite);
gulp.task('img', img);
gulp.task('build', gulp.parallel(clean, img,  to_less, scripts, build));
gulp.task('watch', gulp.parallel(browser_sync, css_libs, to_less, scripts, sprite,  watch));




