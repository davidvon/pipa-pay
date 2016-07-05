<template>
  <div class="home">
    <div class="vue-home center">
      <h1 class="vux-title">
        <span class="demo-icon" slot="icon" style="font-size:60px;color:#fff;display: block;">&#xe637;</span>
      </h1>
      <p class="vux-notice" style="color:#fff">沃尔玛礼品卡</p>
    </div>
    <div class="bg">
      <flexbox class="vux-1px-tb" :gutter="0">
        <flexbox-item class="vux-1px-r">
          <a class="item" href="#buy">
            <div class="img icon-order"></div>
            <div class="text">购卡</div>
          </a>
        </flexbox-item>
        <flexbox-item class="vux-1px-r">
          <a class="item" href="#pay/cards">
            <div class="img icon-pay"></div>
            <div class="text">支付</div>
          </a>
        </flexbox-item>
        <flexbox-item class="vux-1px-r">
          <a class="item" href="#gift">
            <div class="img icon-share"></div>
            <div class="text">赠送卡</div>
          </a>
        </flexbox-item>
      </flexbox>

      <flexbox class="vux-1px-b" :gutter="0">
        <flexbox-item class="vux-1px-r">
          <a class="item">
            <div class="img icon-buy"></div>
            <div class="text">在线购物</div>
          </a>
        </flexbox-item>
        <flexbox-item class="vux-1px-r">
          <a class="item" href="#member-cards">
            <div class="img icon-mycard"></div>
            <div class="text">我的卡包</div>
          </a>
        </flexbox-item>
        <flexbox-item>
          <a class="item" href="/#guide">
            <div class="img icon-desc"></div>
            <div class="text">购卡指引</div>
          </a>
        </flexbox-item>
      </flexbox>
      <flexbox class="vux-1px-b" :gutter="0">
        <flexbox-item class="vux-1px-r">
          <a class="item" href="#help">
            <div class="img icon-help"></div>
            <div class="text">帮助中心</div>
          </a>
        </flexbox-item>
        <flexbox-item class="vux-1px-r">
          <a class="item" href="/#notice">
            <div class="img icon-guide"></div>
            <div class="text">电子卡章程</div>
          </a>
        </flexbox-item>
        <flexbox-item>
          <a class="item" href=""></a>
        </flexbox-item>
      </flexbox>
    </div>
  </div>
</template>

<script>
  import { Flexbox, FlexboxItem } from './components/'
  export default {
    components: {
      Flexbox,
      FlexboxItem
    }
  }
</script>

<style scoped>
  @import './styles/1px.less';

  .demo-icon {
    font-family: 'vux-demo';
    font-size: 20px;
    padding-right: 10px;
    color: #04BE02;
  }
  .home {
    background-color: #fbf9fe;
  }

  .home .bg {
    background-color: #fff;
  }

  .home .vue-home.center {
    margin-top: 0;
    /*margin-bottom: 15px;*/
    text-align: center;
    padding: 20px 0;
    background-color: #5c69c7;
  }

  .home .item {
    display: block;
    box-sizing: border-box;
    font-size: 12px;
    color: #303030;
    position: relative;
    margin-bottom: 30px;
  }

  .home .img {
    width: 40px;
    height: 40px;
    margin: 30px auto 3px;
    background-repeat: no-repeat;
    background-size: 40px auto !important;
    background-position: center;
  }

  .home .text {
    font-size: 13px;
    text-align: center;
    line-height: 1em;
  }

  .home .icon-order {
    background: url(data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAsCAMAAAAO9CvbAAAAQlBMVEUAAAAEd8MEd8MEd8MEd8MEd8MEd8MEd8MEd8MEd8MEd8MEd8MEd8MEd8MEd8MEd8MEd8MEd8MEd8MEd8MEd8MEd8MfcSdcAAAAFXRSTlMAv39AD9jwj9/5UZVgKwbQrzAgnHBUZOGiAAABSElEQVRIx+2W0XKDIBBF7wIiVUzQ5P7/rzarpGmaGAM+tA89D44zeNxd0NmFMrTNBwv4aNoBC4eeFfSH2RVWIWr3rKQHBq226RwKcF2jlQ9o1b2ok3Ulutot9NphfkcssDuNCc3aITJBvCsIrXmDF4DEkxFavI96WRYeRWSsk1sawKFOdl5DV8pw0ZynOjnzm/IoLVbQtdeypWDB8MZtbVXmDQNEWQikv8oLK7LIkV6fN8g4Q6bpKntRVuScmvmSx8BgH0p6M7JhynsleU3ZrDnmgoMolt/ZTNs8Pj6ZWJi2uTvGdBq3jypNT2XvSbGvdxuOfB4ZMZDd+hcWrLUtRe+tDT9l4JywJjvPGd2aIy/kGjfPOW+pYuecRaTDnfxX/+d/eUvOja4YR9LnFpspbbG5uSvFzX3XWLFnoNk1Su0b4qrGR5/Hx0+BXEsmqCjIfQAAAABJRU5ErkJggg==) no-repeat
  }

  .home .icon-pay {
    background: url(data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAsCAMAAAAO9CvbAAAAVFBMVEUAAAD5YmL5YmL5YmL5YmL5YmL5YmL5YmL5YmL5YmL5YmL5YmL5YmL5YmL5YmL5YmL5YmL5YmL5YmL5YmL5YmL5YmL5YmL5YmL5YmL5YmL5YmL5YmJN49c9AAAAG3RSTlMAYLDQ4cCQMKAQ9uvcB/q4nn1tUSsjrpZKPxt8UBcmAAAAgklEQVRIx+2WSRLCMAwEOzsYOwlZ2Pz/fzIqhw+Qq/rgGqumdRZLyMbtBWwx57ixx1ABn0bjNzC01pgSIk3jE+6jBmHBXKMBZgszvSTUsF8HPEpjRawKeyqDQD5ogdpCzUUv0P92dqVRISqF4Xo4Lrvssssuu+yyyy7/LZ864k6dj1+dZanfWAUSdgAAAABJRU5ErkJggg==) no-repeat
  }

  .home .icon-mycard {
    background: url(data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAsCAMAAAAO9CvbAAAAM1BMVEUAAAD6gqX6gqX6gqX6gqX6gqX6gqX6gqX6gqX6gqX6gqX6gqX6gqX6gqX6gqX6gqX6gqW2e72BAAAAEHRSTlMAkvjXDisGUtq8mHnLrhpBmQm+CwAAALlJREFUSMftljkWwyAMRCUWY8dLuP9pw7xEeSnREHf8wkbFt8wUCPkLWWOofYSo+VddtPp4LGKko3rZvvZZ/aiQPFs8IbP2bq0taU/OVyuiJe3OGV+CuzE5Y9FeSuRscsZu15Kkh1TWipxNVrimdugRrU1GUaSfgpxNxl8nh5zeOUO2pwMIU57ylG+Rw4h8jMj7gBwuWkZjXj6FlxVL9vQE7Ln9QVH4JwagZxWgpySg5zOgbwaAu5MYL3AUOCsu3tG2AAAAAElFTkSuQmCC) no-repeat
  }

  .home .icon-share {
    background: url(data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAsCAMAAAAO9CvbAAAAilBMVEUAAAAQvGEQvGEQvGEQvGEQvGEQvGEQvGEQvGEQvGEQvGEQvGEQvGEQvGEQvGEQvGEQvGEQvGEQvGEQvGEQvGEQvGEQvGEQvGEQvGEQvGEQvGEQvGEQvGEQvGEQvGEQvGEQvGEQvGEQvGEQvGEQvGEQvGEQvGEQvGEQvGEQvGEQvGEQvGEQvGEQvGGa42DVAAAALXRSTlMADP0G+erYkPKZUhcQ0Cr249vVx7y3O10twrCnlZSHfGVNQzUldmtVIsqhjBNKh5G/AAABo0lEQVRIx6XW146DMBAF0DEl9BIIPQk1Pf7/39sMG5a2Agz3gRESx2CNkQ0YU9oJlCGCI5nwG/7EUeZwCqntga7Kgf/gI12ZE4CJ37xXCTCEqHv8chOkT9npwBh992ES4FUF5qj4TsAeEXZMsGOAUwf21O5frF3jvSyI0dlnxppi0SZGzoZzkXYTEwYcDNeqoS/Gfv2HyF9oNetwEeYdvM8hqIco4Yz1shDfagSgYXUBCqwivwwnFKP4ChYu9T2KKZZhmw6yPxeVri/DQp+KGV+lnmMb8VWbx3K/S3ctaTpnSWQOG11ra4XYnYE5g1+0DeeXFu0Ndp/GVWfScd10K7JwIFfG3k1jkFqcZ3i91r0/Qog3t2lM3D+sR3XPCa4yjwQUyzSG9+NrZRDpMOIMBj5qHuRGWJjGbbsEfvxmew5XVLzc1VR5at4IP+dwljZLKRharpzDbfjHACuwHIPZn7VLWDCUdsceCDBheCvteg2BCWO0LHEN7xQk3IUZt/FfI7xlo5O3bLHOts09XHWsQMuFGw40x01HqW2HuFXHR9mRQnQ/e3LOmtQXXGQAAAAASUVORK5CYII=) no-repeat
  }

  .home .icon-buy {
    background: url(data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAsCAMAAAAO9CvbAAAAQlBMVEUAAAD6eWD6eWD6eWD6eWD6eWD6eWD6eWD6eWD6eWD6eWD6eWD6eWD6eWD6eWD6eWD6eWD6eWD6eWD6eWD6eWD6eWCC5XJqAAAAFXRSTlMAbdYH4ynwkoWyeiEYEUa5W8HKoDjxN+TOAAABQ0lEQVRIx92W2Y7DIAxF2clCtk7v///qjEkQTNTGEM289DxUQuoBxyZ2BGG9Qh3KW/EL7dGC16W7oI2tsD1a8SJhaSmDqOMZk2PLg6WoJpjyaNoqiHok5Twt8INoIJBwVxYv5Q7v6TgZV/ynfD9slg+Vu6s83SnVn8thHvrmsJkoeO7Lk+wNnOrl1CzrweHADbpNHhUK1HiVsO5V61LSam0lbWPCValOMT+oTZZt7KGr5QHAnJczgKE27Mmlc/PZbkoy325V3kmZ2LBlpdwDskiditv1R9O3jGziX9aVSuaw7UPKHONm0ewt1PQryV1i+gGkQbc9L2UX5RXwhqLNMjti90ezItr4IiWFzQ/3MSdsNrubEsZ/VnSpVJlUKv6DxoV3l4SBuZ51aHV+MZQW1YznV3LkDL4ZELfbENHQAGGKBvgNeBdKwKDRm0UAAAAASUVORK5CYII=) no-repeat
  }

  .home .icon-desc {
    background: url(data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAsCAMAAAAO9CvbAAAAV1BMVEUAAABCyc5Cyc5Cyc5Cyc5Cyc5Cyc5Cyc5Cyc5Cyc5Cyc5Cyc5Cyc5Cyc5Cyc5Cyc5Cyc5Cyc5Cyc5Cyc5Cyc5Cyc5Cyc5Cyc5Cyc5Cyc5Cyc5Cyc5Cyc5m4pNFAAAAHHRSTlMAEPAyKZIgP1UIz4ly4rfbp5hIGMCBYGZsyOeyqSRvRgAAAYlJREFUSMftlcluwjAQQL2N9yR2dsD//52NgGlqDUpReuHQdwHl8ZCNM4Q94CZC66+ibIjmksIiHTtyiLPgywt8MO7IbamGcpKgWS6nyez5pmlh7aUeONdK2gijeIojd4/BDoyg53ToMObsJfzIfVLMtZRSDTRGJ4dXsZuh7QrSpdXtsbOhcpHXsSoEh/FAna5iKISI8URdqGKDl69N87wFFMYSnfh2st6zbfNqFH9Miu6nZB77QtdX7sPO+Ww89BFuvhNCNL6FWeEHiMubq2OXybDuMXWuimMhzBjP1MUqXguhx9hSZ+tlQ+luYbVGKiX7BS5i2pcNpbmFiC5s7nOO6n5lW5Y1eJdiTByJeUxeFES007DHPOafbgz613nmb89zPj/P+8w23vtO4LfjqohT9Z5NmqzCH8fJFRTDeHPByuHbLaA+65z/43djJ2dIY9eIjabzbQ6L0YyjC9Tt8VhecjlyGJ/i73F6vI5w/5PSWkvTL1PGBzJx8+6AmVTGqBjFKRuuB65d2BfLUI7gKT85UgAAAABJRU5ErkJggg==) no-repeat
  }
  .home .icon-help{
    background: url(data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAb1BMVEUAAAC1jce1jce1jce1jce1jce1jce1jce1jce1jce1jce1jce1jce1jce1jce1jce1jce1jce1jce1jce1jce1jce1jce1jce1jce1jce1jce1jce1jce1jce1jce1jce1jce1jce1jce1jce1jceskZfgAAAAJHRSTlMAEQX5z3/u28C6YC+uFZJyUB7IDJdWMiog1XxnS6ClGvDfSECiepqQAAAB40lEQVRIx51W2ZaCMAxtWUpZLKgoKqij8v/fOCblTHeY0zxoTbxtcpMmJa7sK1EWLE1ZUYpqTzZlf7vOhlxv66i6mT3S1EHA7j4H5L7zI05M2lOedwNNEjp0OU+ljp08gKSXxmykupqOmdT3iY04lhIwuZtNkpDyaCEO6FKbEJ8DLbp3MDAJnlHUQSYLPEffsEendiRMZobxaFzhuZSsCEXP/3h7MvAKz1g5B3xjz+XXAyI/kw05AwePZQ1Htma4ecN5k5t0tPA/uXMDoSc6gM+LcKrTChQ0WLtge+vb5aq4Mh3zBs3lu7iBhQQgc64bskUB5TBaECa6T4WpeOmGEZiVfqXUhOT4m2JlG8lJ0bMKorTStnxzG4Kaigj0zysvb5SCQEF2SmnnoTJUHRQngToYfIgKSTZ1A8b/8/30FaRAhGWhUGcELDL1bm4ae68E6A1ALthXCPFBAo4JRb3jWCB8rnh0wveTjNX9wZVLciCVHee89ZMiVMGExC0YVZbWvWwvuHDLUhZ/5Us9q33aQl0xUxhmEpfuFZNZm/4DmfAiq3YRcMxtF6opOeHnsJ/blCJaX1yDVW3cGjm+AXSyhsVhbVggoo8YSfGDb3u8Zmq8xg3x+KfC9oMk8tkT/7iKeML9AgOjWuHgDlXdAAAAAElFTkSuQmCC) no-repeat
  }
  .home .icon-guide{
    background: url(data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzA3RDMyMTMzNDUxMTFFNjhFNjVCMkUxQkUwMDQwNkYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzA3RDMyMTQzNDUxMTFFNjhFNjVCMkUxQkUwMDQwNkYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDMDdEMzIxMTM0NTExMUU2OEU2NUIyRTFCRTAwNDA2RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDMDdEMzIxMjM0NTExMUU2OEU2NUIyRTFCRTAwNDA2RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlATlugAAAUySURBVHja3FpLaFVXFL3v8sJDbcsTzUD6M2oUxJpoqRJBB2kGjR0YP6QWP9AGzMCQiQMxAakWU0oxTjIxWAexVvsIqIjJQJOBglKt8Z8SjcZf6SCK6SeFkNJ27XQ/uW9nn/ve/bz3EjcsDvd3zl73nLPOPvveiBWSRXdeeAtFOfA+sBCYDcwEpgA2MAw8Ax4CvcBVoPvvr1c+DaP9SAjO1wDV7LwfI1IJoA2kBnJKBARKUDQwgTCNCDWB0I2sEgGBQhT7gS1Wdu0IsAOEBkMnAhL09g8CccMto8AlGvfATeAe8AvwJ19/DXgTKAYW83wqAwoM9Q0BtSCTCIUICFBDB4DthluuA63AcTT6wmMPT0exEdgGlBpuo7rrUPeobyJoaBqKk0CFgUAj0IlG/g0oGuRHJfCNQTTOAVVoZ9gzESbRBSwXl0aYQHNQAoberwf2ATFx+UfgQxOZiEuFHUpP3AfW+1EVH6rYDsxTema1NsxsQ10HFBI0lMqyTYKM21jBbTqNfGrJqEdYnX5QurXS62QOoWdIDDqV4f2JVLOIslLfEhJ7n3ti0MqD8dpFsj5XSPN7zvBGDq0mQYImdnW+SPAwG+QIYsRxOs6+jp8jYL5UWbEbUVGPlWdjHxrF6S3s87ge2a1M7mZr4lizMvl3p8wRMCtC8UDc9DHeRMcEIkJ+rkZxRpyeQ1FzlA8+lb2RLxL8Uks5HlsCXIMve3iIdeD6dRHObAX2JIlsEvW15MBhWnQXAEt5M5Z0Pi4WwCbFt0OO481EJMKS+0Qo1aww1wwOd0oYpY4y5vJYPy2KUjF5bflVPDsnyuF0yuIXlAQPj3XAMmARh+4FHqqgdWKtJvvkG+qnBXqV43R5lBtzWncIC9hZsYB5MYqjNsHh2y73dAsiS2wep067EXDctwcgQbYrA6GRPi4gIkXi5N0ATrSIN+XVWkFifwb3SR+LiMgMcXLQZ2/s4J3eS3snHrM6axZZv325YqykYxc7TzvBDJuTPs6wlT34kM+F6qtxr3dDsVVRHLemFthj5eHq+aYqKDDdkG476+LjNDsEaSVVOqqpUtm7b6Qcf/D26yanqoIGprbCLu5RoU6Ynrn06PeU4ytP/tAU6rM0CqWZbG+YiDwXJws9KNT3ynb0pW1rv2d19Q9Zf43+M1Z+nrirKdRJHx0gfXxO68iAkEsayL0ZKlSF2w2Ph0asjw4ZX/aRDBVKMznZBqhH+sTJEj8K5dFIoWoCPC997CMil8XJcj8K5cEeelQozaSP12wlJFnOgZlGYqFJodIYBYAJ3uWVB1Eo9k0mI7qjtIHHxV5Hhi/GAd+3ikKdSqNq9JbvcC/TvoEmSI9bhtCHrRORb79zY3WUs3tJq4Pjh5OZRINCkWzfZIep/IlEIuCQSdcbEWX1/27sGh8cE0Ror1DJ2UayBt6nfAH8TEsCjfWwU6YZWKU1PtndlpLXAlvS8zUi+bAsm2/YR2R9WRA5Bf+qZBZlr3iWHqifQLmHeqU39qZkURys20Rua4S3mz157g3a118Uk5wW1K1aXis5F5yxFz2YYMXKF4lClu6YEJoGGTQ698OUS60VdVH4cpoTCLkmQW2eVnactfKztq1s7ol9q1wkga5c9gy3pX1oatW+K5r2I3WcU5JkLvJHmGyTKOE5IUmcM+0iX+1Pb4JMLj+G7rP0r7v+P4aKt9TiErZP/M/TotHJ/cOAoiST+xcORVUm7081CqHJ/ZuTCyka95QUp3zybOv/H8+SEYHzx7M+jmRD+/HsPwEGAMaKAd6CPDGYAAAAAElFTkSuQmCC) no-repeat
  }
  .home .icon-notice{
    background: url(data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAA4BAMAAAB9BqfFAAAAHlBMVEUAAACbzUebzUebzUebzUebzUebzUebzUebzUebzUcpUvwCAAAACXRSTlMAhdiSDlIrBrzenGIdAAAAh0lEQVQ4y2OgI0jWnIkEJpmBxIpnogFzBgb2TnTBGQUMzDMxgAFD5sxJIcg2uGrOnMZgOVMF1V6nmZMZNGcGoAqyzpzEMHOmA6ogy8yZDECEBugsyDhz5kQgAQECUEHOmWACAibgFMTUPuqjUR+hCmKmeay5A2s+wprjsOZNrLkYW37HXjIAAGRoBtDIholXAAAAAElFTkSuQmCC) no-repeat
  }

</style>
