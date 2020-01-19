# Movie App 2019
React JS Fundamentals Course (2019 Update!)

# Protection with PropTypes - #2.4
npm i prop-types
import PropTypes from "prop-types";
Food.propTypes={
   name:PropTypes.string.isRequired,
   name2:PropTypes.string.isRequired,
   rating:PropTypes.number.isRequired
 };

# axios(엑시오스)
npm i(install) axios
import axios from "axios";
일반적으로 사람들이 js에서 data를 fetch하는 방법은 fetch를 사용, fetch()
but, 더 좋은 방법이 axios라고 부르는 것, 마치 fetch 위에 있는 작은 layer

# YTS API

# Deploying to Github Pages
npm i gh-pages

package.json에 "homepage" 추가
ex)  "homepage": "https://kimja7045.github.io/movie_app"

"scripts" 에 "deploy" 추가
"deploy" : "gh-pages -d build"

"scripts" 에 "predeploy" 추가
"predeploy":"npm run build"
매 순간 deploy를 호출할 때마다 predeploy를 먼저 호출

npm run build
build 폴더 생성

npm run deploy 
build 폴더를 upload