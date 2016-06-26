<template>
    <div class="home">
        <div class="vue-home center">
            <h1 class="vux-title">
                <span class="demo-icon" slot="icon" style="font-size:60px;color:#fff;display: block;">&#xe637;</span>
            </h1>
            <p class="vux-notice" style="color:#fff">沃尔玛礼品卡</p>
        </div>
        <div>

        <flexbox class="vux-1px-tb" :gutter="0">
            <flexbox-item class="vux-1px-r">
                <a class="item item5" href="#buy">
                    <div class="img icon-order"></div>
                    <div class="text">购卡</div>
                </a>
            </flexbox-item>
            <flexbox-item class="vux-1px-r">
                <a class="item item6" href="#pay/cards">
                    <div class="img icon-pay"></div>
                    <div class="text">支付</div>
                </a>
            </flexbox-item>
            <flexbox-item>
                <a class="item item7" href="#wxcards">
                    <div class="img icon-mycard"></div>
                    <div class="text">我的卡包</div>
                </a>
            </flexbox-item>
        </flexbox>

        <flexbox class="vux-1px-b" :gutter="0">
            <flexbox-item class="vux-1px-r">
                <a class="item item5" href="#gift">
                    <div class="img icon-share"></div>
                    <div class="text">赠送卡</div>
                </a>
            </flexbox-item>
            <flexbox-item class="vux-1px-r">
                <a class="item item6" href="/gz/326/0-0/0-0-0-0-0" mon="position=1&content=在线购物">
                    <div class="img icon-buy"></div>
                    <div class="text">在线购物</div>
                </a>
            </flexbox-item>
            <flexbox-item>
                <a class="item item7" href="/gz/326/0-0/0-0-0-0-0" mon="position=1&content=用卡说明">
                    <div class="img icon-desc"></div>
                    <div class="text">用卡说明</div>
                </a>
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
    .home{
      background-color: #fbf9fe;
    }
    .home .vue-home.center{
        margin-top:0;
        /*margin-bottom: 15px;*/
        text-align: center;
        padding:20px 0;
        background-color: #5c69c7;
    }
    .home .vux-flexbox-item {
        background-color: #fff;
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
        background-size: 40px auto!important;
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


</style>
