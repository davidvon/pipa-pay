<template>
    <div>
        <div class="vue-home center">
            <h1 class="vux-title">
                <span class="demo-icon" slot="icon" style="font-size:60px;color:#fff;display: block;">&#xe637;</span>
            </h1>
            <p class="vux-notice" style="color:#fff">沃尔玛礼品卡</p>
        </div>
        <div>

            <flexbox class="vux-1px-tb" :gutter="0">
                <flexbox-item class="vux-1px-r">
                    <a class="item item5" href="#order" mon="position=1&content=美食">
                        <div class="img meishi"></div>
                        <div class="text">购卡</div>
                    </a>
                </flexbox-item>
                <flexbox-item class="vux-1px-r">
                    <a class="item item6" href="/gz/326/0-0/0-0-0-0-0" mon="position=1&content=美食">
                        <div class="img dianying"></div>
                        <div class="text">付款</div>
                    </a>
                </flexbox-item>
                <flexbox-item>
                    <a class="item item7" href="/gz/326/0-0/0-0-0-0-0" mon="position=1&content=美食">
                        <div class="img jiudian"></div>
                        <div class="text">我的卡包</div>
                    </a>
                </flexbox-item>
            </flexbox>

            <flexbox class="vux-1px-b" :gutter="0">
                <flexbox-item class="vux-1px-r">
                    <a class="item item5" href="/gz/326/0-0/0-0-0-0-0" mon="position=1&content=美食">
                        <div class="img huoguo"></div>
                        <div class="text">赠送卡</div>
                    </a>
                </flexbox-item>
                <flexbox-item class="vux-1px-r">
                    <a class="item item6" href="/gz/326/0-0/0-0-0-0-0" mon="position=1&content=美食">
                        <div class="img lvyou"></div>
                        <div class="text">在线购物</div>
                    </a>
                </flexbox-item>
                <flexbox-item>
                    <a class="item item7" href="/gz/326/0-0/0-0-0-0-0" mon="position=1&content=美食">
                        <div class="img daijinquan"></div>
                        <div class="text">用卡说明</div>
                    </a>
                </flexbox-item>
            </flexbox>

            <flexbox class="vux-1px-b" :gutter="0">
                <flexbox-item class="vux-1px-r">
                    <a class="item item5" href="/gz/326/0-0/0-0-0-0-0" mon="position=1&content=美食">
                        <div class="img"></div>
                        <div class="text"></div>
                    </a>
                </flexbox-item>
                <flexbox-item class="vux-1px-r">
                    <a class="item item6" href="/gz/326/0-0/0-0-0-0-0" mon="position=1&content=美食">
                        <div class="img "></div>
                        <div class="text"></div>
                    </a>
                </flexbox-item>
                <flexbox-item>
                    <a class="item item7" href="/gz/326/0-0/0-0-0-0-0" mon="position=1&content=美食">
                        <div class="img "></div>
                        <div class="text"></div>
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

    .vue-home.center{
        margin-top:0;
        /*margin-bottom: 15px;*/
        text-align: center;
        padding:20px 0;
        background-color: #5c69c7;
    }

    .vux-demo .test{
        height:50px;
        text-align:center;
        line-height: 50px;
    }

    .vux-demo .vux-flexbox {
        background-color: #fff;
    }

    .item {
        display: block;
        box-sizing: border-box;
        font-size: 12px;
        color: #303030;
        position: relative;
        margin-bottom: 10px;
    }


    .img {
        width: 60px;
        height: 60px;
        margin: 18px auto 10px;
        background-repeat: no-repeat;
        background-size: 60px auto!important;
        background-position: center;
    }

    .text {
        font-size: 13px;
        text-align: center;
        line-height: 1em;
    }


    .meishi {
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAt1BMVEUAAAD9Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl7/////+/v/9/f9YmL9Z2f+zMz+u7v+kpL9eHj/4+P/7e3/6Oj/3Nz+v7/+trb+srL+mpr+iYn9c3P9a2v9X1//2Nj+09P/8fEgsZRxAAAAJHRSTlMAC+P18ncfFuzf251PRta9uKhZB2xI6dFccMjGmJSQKSSSFBJnGfpEAAACkUlEQVRYw6TU126rQBAG4AGDacYtbulR9K8BY5ym9PP+z3UmTkBGHsMC3wXauZif1TaqcR/OrkfDhYWe6y1H17PwntozBjdLHFneDAxqI5z0cEJvEjae3LmHSt650STOdlHLtbUjpya0mFPS0R9D27hPtVYWGrBWVO0sQEPBGVVwLtHYpVOxfD5a8E8u5K2JVsxbEt2ZaMm8I4HjozXfEfb3Ah1cHO91gE6Co/OMjlZU0rfQkVU+PGN0NqYDU8iydLeOdmmGX0qp/Tcflk2pYJiQxC9rtbd+iTUCTYNytpz3rQrfcX0g7GKCLgSfG3Vg81kf6OZTnEHyqtjjNkm2j4q91gdiRr88COIH7nlKwJInHj7E9YEe7YWQbLklesfee8TFtj4Qc/oxgeSZW9K8SLl41gicEDN6kOy45S0v3rjYaQT2DA4cQPSPWz7y4oOLSCMQAw68gmjNLXGxQ4rpBF5xoA9R1GqGPpEDtF1DiUNzoO0uS+ZkA23PocSmAKzzTSkENALTvcslkIxoCKb52kTqQATJkBY4Jf5Sha8ErPwLSBZkIVf/YmeRKkQZJBahSpYqlmZFvYn+4jYZZP+bM4MUBmEgin6wMVVDRG0sXYriCbz/2YrNIqsElLfoXwbytjP/jaqtmPN35iUDfLLAhxoWOOvNAr16FtirY4GdDAs0CiwwyLJAK7UksI1DigCmIeVIoIuDngCmQa+BAw46Ezhg0C8NBWwU86KAn7QSE8C0EsswQFOsFWkJ2zMvhVqhMQs89v0ovqSMfDXjyyNfb/kCzisCXmLwmoUXQSm1v8PztbJZ78i0VYVMy1XeMqkcd01IOlqZwlKX1s6wGGfV/T8cF2JsPH9U21bN/jx/WJXzBaE7wxSmWFkJAAAAAElFTkSuQmCC) no-repeat
    }

    .dianying {
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAxlBMVEUAAAD/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/////5L7/+/X/rTj/+vL//fr/xG//vV3/uFL/v2P/37D/1Zr/u1n/+e//9+v/rz3/t1H/9OT/8Nn/687/4rj/uFP/skL/8d3/2qX/wGX/t1D/58T/yn//zof/y4D/6Mf/15wdca20AAAAIHRSTlMA8wvgRyCbbhYI6tuST9a9uHZZAu3k0afIxnhcKRSoXSwatFIAAAMsSURBVFjDxZnpVupADIBbilDZQcQNNEA3pCiuLILo+7/UJUUow2Sm25xzv19OTomZJJNJUy2CXr5YqddKOkC73KlXivmelp5ctdIBjk6lmkuj7SJ/pYMA/Sp/kdS4ogFSjGISM8+bJYik1DyPq69lQCyMVix1Zw2ITeMsWt+dDgnQ76K8V4CEFKSeNG8gMTemxH1lSEFZ6MjuJaTisiuwD/Wl00jaaJYhNWWTiO81ZOCaj3UBMlHg8hkycncSEB0yorOBaUBmGkx9ATHW0h/Mbcex5wN/aYGY1lE5FderydjuH2GPJ+JqFpbcplDdqs+xEqpsHgwsCTa7cPoEzkKw8fbexCKQfL3tFDyPN97MsmbeZvy8k7x9AUnx736jPeg99ZF399ge9z0QPnm0F3d3YZ7WN8RfvrqncvcV5UNaYz5QeEXuN7DvYwoc04/ARnLX90FIdCoegf/8/fJlMBwOXvYrP/AjFRkdw1IFggX+5ne/GtlBDo72619cLoCgKigzEwf3e1gO+gGDgwB37UwERYeqqyuMR+i/bXweH7eRCP2IkVlRlVbTTMpAtMcFsUJw8QnKRJNMmjHmHwC/5RDMxzGZOLdEiG3WQPjcBeUTWBNtItC3VEyWeN6Yh0eYNiPmn+IpXFJRqfNCn98O7RafF9e1Gi9El234fGYl68CpHDWNKF3z7bPeST5bFrASb/vHnGhDNeLg4TGescH9dpxvVjLDA00cPg148JhYTPpNtyJnyiSkhYcFeOIptFChFU9hW/WWDVFQwnzeByWUyILSodNmzedzKJGljfLEFh89Mp+jj560OJAVOywOQ6o4KC9fWQqsRxVY+gr4iXMF/FBXgPJLSnqN+qKK7Uuu0eiLnsvwqIteu1faiqhvlqLbOUjQzkkbzpdDw7neNZzrQ8M5kjacWq4tb4lpnl2iJY5u2mUa6aY9+rUirkIjl+jFJ3rLLdWvZupfHhkeICMPql/AlY8IVA8xlI9ZSLoGpMLoCkdVNUhBTTLz66UZpvWk474KJKQSNTittiEB7arqkanioa7qsbPiwbji0f3//7jwh3n4/KGXavj5w9Tk/AOdOYKawb/jQgAAAABJRU5ErkJggg==) no-repeat
    }

    .jiudian {
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAgVBMVEUAAABMpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP7////u9v/0+f/F4v9erf7M5f9nsv5msf72+/+Avv5/vv7trVlKAAAAH3RSTlMAC/Pe6+N3bh/YT5VGx7ionFkmFAdI0VwWvruQnfkSrqgnKwAAAhFJREFUWMPNmV1vskAQhQ+7CCyoYBXF1vZY7cfb/v8f+IbGhgjswsJc9LnQC8MTzEwG5iwG2C7j7NGEis+h3j9m8XKL6QTp054d9k9pgCksc0ULKl9631ys6UTHgY8uCjlIGI1WbhYcxWKDMSRrjmadYJCDogfqADe7Ez057eCgWtGbVQUrieYEdAILDwtOYvFg90kat5qT0due+q44g1W31gVnUXT6mTM5tBpGcSbqvnnWnM36br5QgE3jC9od+Hm9nHu5XD/t3djMx4j3fDS6rvKDNiLcCNrz+Xp2cKWN8PcWY7a4uIT/aCW+CTVb1Ne9v7HD23v9C63o2/OSfcLa1zW6hSxRk/cK2cuAMAeAQMkJVQAgtV12+2o+h4VMAWSSwgyAkRQaoKKkkBVKUqooNSUiWWGEwlfonjsFjr5C99w5wvgWxT13DEJfoXvuhFDeQufcUaC30D138DyxbazCUFaooGWFIfayQoOjb1HcwiMKWWGBSFYYoZQVlqhki1IBWlJoABSSwgxAKilMAQRKRNg86JHLCXPUlHLCEj9oKaHuf+H8fj2P5PWbd8T9r8SNb9jY/0qMSEYYWdaKr/F/+au1VggvPtKrmfjyKL3eCi/gJ/GIQDrEkI5ZxIMgC4nhBEwCKy9TwrQXONhl9CTbwU3qF0im0pGpcKgrHTsLB+Oy0f1fOFxoHX9QhWbM8cd/o/xelxZNdwAAAAAASUVORK5CYII=) no-repeat
    }

    .yule {
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAsVBMVEUAAAD/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/qzP/////xnP/8+L/rTf//Pj/0pD/+O3/4LT/0Ir/+fH/687/47z/uVX/s0X/rzv/6s3/6cr/3rD/zYT/yXr/w23/wGX/vmH/8uELPQ/JAAAAInRSTlMAC93jmxX0uW7skk/xItZ2WQdIRx7p0VymyMa+eCmo+UUShokM0QAAAoRJREFUWMPN2ddW4zAQBuCJe+zEIRUWQvsVp5DQlrLl/R9slQI+HI+H2J6L/W50/hsfgeSRNaFv+DdRHKbjANdtZxLG0Y1P9bWSeIKCSZy0qI7hWYASwdmw8uQiByInalV5XK+Nb7V7Rz/yxMVR3BM6xijE0cIRfeu0gwo6pyTre6jI65PAP0dl5z6V6jqowelSiUsXtbiXJfNzUZPLztF3UJvjM+v7Aw38KK61h0a8wn5GQ6f0xaiDhjpf38IQjYVf6gsUnNCnlgsFbl4fe2CsV6u1EBi9zwm2UTQz1i8hFLU/phiBcW+sn0JgRLTngLEw1kIIDId2htB6IAa0dQatPxlXZLUCQGVRrGC7LAkAnW1jJVyZaVp0HChyiHzw1sZaC4Hn0wC8zFiZEHgDmkLVlDyo8ugCnPlfs5PNhcC5oBScmTmYCYGT0hicB3PwIATOmDpgzBfmYDEXAiMgcH4bY+6AOzv8EQKHrsFYGmOWh0EIHGqDsZ3AbL8Ar0JgBMyrfCh5j8CjHV6EwC7KBIzt2/UEPNkhEwIj5Tf2xhjzDDzbYSMExgX/6hnrYxQCw6Op7gOnfPky+R9mhMAY8AV2k//rN0Jg+PwRkOWbIxNCkVNySN3n2/dFCEVeyTF6l79gr0IoSkoO+mVeApZC4A96uuKrzWqO1bamCIH/FKFBST18e8tLIBu4TbPjaFVsl/YirTMlKv8knmf52SYE9pOY/2h/NzvvQijoqV8r1C8++lezXLf55bGrfb3VvoCrtwi0mxjabRb9RhBvlKKGdESlbus0025J0I9RUdwnWVKtIZkot0y7yk1d7bazcmNct3X/P/y4sOcPDz9/IBinYRwNfZL9A8ZHohfA02LYAAAAAElFTkSuQmCC) no-repeat
    }

    .huoguo {
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAulBMVEUAAAD9Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl7/////8PD9Zmb/4uL+v7/+jY39dXX/+vr/9/f+i4v/2dn+x8f+sLD+kZH/6ur+np7+mJj+zMz9Y2P+s7P+1NT9g4P9a2v/8vL+qan/5ub9fn7+o6NSiy7pAAAAIXRSTlMA6+NHCZta9Ll3HxYM39tP8dbHqAJs0XAHvpSQKSQU+ZLUEo5MAAADEklEQVRYw6TU21KDMBAG4AXKyRZKj551/oC2tVVb60wd3//BDNDRMYQlwHfBHZnsv7uhBg/O4iaYWD4erWgZ3CycB+puML5domJ5Ox5QB3Nn5qOGP3Pm1M7oMgIruhy1qTW00MgKjSv3bBixPTJxEcBYcGFwvQQtJF5Tei5actkkh1O0Nh0y8cXoIK4N8s5GJ/Ydad3b6Mi+1+YXo7NYk+PVFD1Mr0jloheXFB568pSBSdBT8n94AvQWtCh4mwop3RoXPbDBSkUhBcv+2+oQrLU4W4MV0tnIAutbnH2DZY2otABvJ8/a7+VnB96CCvMIrC8hPT8L6QusaE45B7yDkN7fhXQAz6HcDLyjkLJMSEfwZiQNfLA+N3l6ZZKbT7D8vC1j8Ipa34C3onLwxgbPTNGNE3AqemPw6MRoXpMXSC/Ny4KYaAje6bcZx/KqvKFuaD6E6lCOj2qrG5xQV6RqXa60QhdAqOlJtqn5MTU40KXr5gPTFQor9cRNBtU1TVDxKpofgp2QXlExIQsVW5FbgbGqa4pFCaqehLTPUCvbC+kJVT7pt00pSBuKfg9/ijOj3QZhGIqm0jqkgoR42dqn1SZAgDExCqis3f//1hS6PWQEWxRQzwdYQLDv9Y14Awst3hp4hA/UtGBDWMe/ym4VqXqZAusr63E92iyFhAGywJ7KriviBaw02FMmg/MtsacBK4E4EFNL854Y5fT/R82xg9iSX14TxtX1XNfnaxXrVqHPa0uIfJXhCFlFiD2heapFK62idM8l9STCARGpKy4nAXmRGvOlyBkJ4EVK5s3p0qVpdzk1uQRepHyYBC+jngOL4Xi8FVGRcSKKtiK8WZIlGkQ1aZZ4O9fgP75IO8caTjnolo54xFfeEn+bkz4iPeLGI0y7vcKnrk/0Mb9WhIiZNL9ASKwV/OKThObki7Xqj/C89Gq2+PK47no7fwFfOiJ4WjvEmB+zrB8EaXYB3EGwIzLhe8I0MjfeH2Eix72g8acFkv6qken8UHfV2Hl+ML5wdP/4y4Vf3L/rD3A2gb7+cAXND4l/jLN+XT+jAAAAAElFTkSuQmCC) no-repeat
    }

    .daijinquan {
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAA3lBMVEUAAAD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/pyD/////qyr/68r/rS3/7dL//fn/xWr/1JH/9eb/+/T//Pf/9+z/vFT/tUP/t0f/sjz/+e//xGj/uEv/5Lr/3an/vln/qSX/6MT/1pf/043/yXX/wF7/8Nn/5r7/0If/zYD/rzT/4bH/2qD/6cZoepA5AAAAJXRSTlMAC+MUm/Xxd+zf208f1r24WQJsSAnp0ZRcp3BHB8jGkEUpJKgdTy/f7wAAA4VJREFUWMPFmYlu4jAQhl0CCUc5CuXosb3HgYZyBgIFSilHd9//hdYObC0SJ57QRf0l1AqJT/b8kxl7QhTS7orVXLasQyKZquSqxTuNHK6TzG0FfKrcZk4OoZ1dXSQgQImLq7Ooi7tMQahSl1GWeW4kQamkcY7lFWKAUqyAwp3mAa38qZpX0yGC9JoqenGIqHhoJLUbiKwbLSR8aThA6cBA3sfgIMXu5bwHHw9NfJDGLw0HKy2J4/Uv+IZ+XfuAqHyZDgZmQPb48hmBM393KK0HEGuehNERvDrlqoNU+n7y5NE8+hr0XO/VFzyPvkGACoJ3EkPyhs/s0wfblGajKLkGkve8mbbYn1aAM8bXApNIXgOg16ZcM2kN/7fEIprHZC+twEAWd/0theU5c2DasEDO5Z1r2wuvsLyNRV+A6Z3Srg0TSRxLLvACvd/mlmhyZzoyZx5dSxJIniBOts6M/ScAbksGzRNEe9xh367ApwwvM3ieIELjg9K1vOikUTxBFM60RlPHE8c0IVo0nnCmS5l8zmikhOINRsAlcebVmzgGgjf64FVw0dsn9pcSoEHiiPU1KLUai07bQ1xIgHGSw8SPPWy8/H+IXVs2N5rJgT3lSFa53/G6/0a5WgMRRwcaz7KykyVl1frm/Dnb8URldXmSllUmumq//N8dr9eemeE80IkyfoP12E2Q4YgX1085T4gk1Pm86FCXyHjdvoIHJInitZwhpRieTlIqntl14/dOmZp+ns+USmC93/6a9yXuxy6OCh5kfYn9ueP1LeuLuOV1h+xjhvMg5330+m6G8P2+UE7caczjNxpaTQUP4t7i0KRM7c++h2jOuB8jR8UDg5T8IeTIiZeo8FeULw2kxK5v1ygeaP4WYDrTXovSdxBEPC8d0KTWvM4JIpoH8YA2uuIVZmwLIpIHmYBGP6ZcHeGMmicaPXmUlocOz0dTEFU8cRSR9j1zAqOucGaD40Ep9Dg3Z864gLmD5KXOQg+cvJFYS1sZP6HL8CPxbPvM9LA8cSQmRlCjco/oUyQPDNW1wrTBHlK6QvJiJ5iLDw8kjgcF1NXsFc3L4y6PdSxPP1Veb0U1+6PmQQ17ATeX9dVUzYv/7xHB+XGHGN8fsxx3ECT0lD2El3064jDN73U1Kq96TcKViTaQzBxxZHr8oW70sfNPDMbxo/uff7mw//ojAZAoZzGvP/4CWXPlbGBaMMwAAAAASUVORK5CYII=) no-repeat
    }

    .ktv {
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAw1BMVEUAAABwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+JwZ+L////49/7g3/mUjurq6fv8/P53buPGwvR5ceSGf+eXkerU0vZ1bONyauPd2vjLyPWJgud+duXT0Pa2sfHBvfOyrvCkn+3u7fy9uPKtqO/z8v2cluvn5frZ1veOh+iDe+bmhqTeAAAAIHRSTlMA3+tHCZta9fK5dx8M208U49bHAmzRlBancAe+kCkkqEg3GqEAAAMrSURBVFjDxZnpdqowFIUBtSAOrdahtdMWmdSq1dZWezu9/1NdEwRWBZIDXtf9/gg/3OskZ+ckOSgSzkudXrWlGdA1tVvtdUrnSnHKzdsuEnRvm+UiapelKx0Z6Fely5xy9WsVQtTrep6xmhqkaCZ55GcqSKhnJLlaFWSqNUJ4BnJgyIIsV5CTinAm+23kpt0XTF8DBWhkTuTdBQpxcZeud8/0iinep5aBBgrTSCkZgzaOoD1ICFZwFJWEn3EkZweGMUDC9h3XdfwpEhi/zVMFhcliuGcxSa7r/AO2rWGEZYsGXVZJ8TG9WDERoxqvahMURkzn0fY8+5E9jXCIGdV7DQSmTOUFnBf2nMiMFu4KHVDwWXzYw2L0cUhnv7+poODsNOwoP7sXB4eowV5YAgl3p+Fhj7d7cZGgxAWvQMIiCD5wz+j4V0OGztLSBI2nw6Q8IUmTVmbmntw2cdFpQMp6NA6N/cyM/RwaO0Fjt9FByvvu32P50uP0Caax3SFTFBeH2DgmsSbwGEeh3miCdExpTlbMLqEipr7jWlGBTc3KjSTBrKZGinJulJbMfYzXBVWxpWgQ8cr1tvCoippiQMAH13uKlEceJBgKBHxb3MtztjQ4/hwyFF2Q4A2Paoa5z+Xcd8gRzOGMu+5zjNlj4OUp5BiKiiz4it2sMA7s7ExAQFO6yGDLo1riJ3D2YgwKrUxjv3G9byz/xOkgGbsiqAjuB2yLnA5OJaM4/PC43vDmhukgYqaXr7HDFxzeg3QsQaaUXmC573xsg3SsQKefvgVYbMHNWGFgv6DTSN+kZnwCv4JCgzxUMrZRJ6r0HyASb6N1PdWEnA09HfFGrzwgSeDm0Qr5eMg8LLk7M2+2M+SkFB/nkoIe6MTHOU4nNSs2cnOdfSRexwcjOlo9+9C+dKODEX3opuha4UcHI4eaarUsuvjMv4YhVMUz8dVsvg4FfZp7qtLL43LtuNbnegkSRu0E19sTXsCPbxGUT9zEOL7NcvpGEKfWQgFaNUFPuEgzTdg3HvSQk95AEdPM15BsnrRlenxT9/Rt59M3xumt+///ceH35w8d0LUW5fPHX9VjfATvxQFPAAAAAElFTkSuQmCC) no-repeat
    }

    .lvyou {
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAA21BMVEUAAAAz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zj///8+1J72/fvg+fA30ppG1qJ74rzx/PjI8+O/8d+g6s/6/v3S9ehQ16c605zq+/S58NyB48Bt3rZn3bLl+fKy7tl04Llg26+s7dWQ5sdb2q2m69OF5MFU2anV9urN9OaK5cTb9+2W6Mqa6MyZ6Mx0HWwcAAAAI3RSTlMAC+MUm/R3btvsT/HfIta9qFkHArhIRx7p0ZRcyMaQKflFtwmd2OAAAAO9SURBVFjDxdlrd6IwEAZgKt5bL+222rr3fQMqCCoKaq1r7XX//y/aw4hVSSAox93nS23P6ZwJmWRCVCTUn4VWrXqbw49S8a7WKvxUleOdlb/dgXP3rXx2TLRPjXoOEXL1xqdDkytcINZF4eyQcPkSpEr5xCEvM0gkc5koXPMXErtuyuN9PscBzj9Lwl1lcaDsVWwZf8XBvsaUeqWIIxQrUfG+Z3CUzPeI/CjeURGFOapFHK2oCub3C1L4ws91FqlkuXpGSqEKb54jpfP9VXiN1K739hdEmz8MnqxFF1KXO/tfdAU6D4z0l9KQme3+mEeUTo9tmAYk8h8JlsJhjHFv/OKnZLM1fbxw72U5ljYpFrCvO1gHsZ0VW7M1JFEI+luoH2ltFpg+M+IimYt1L2xg34yFjFyvi0RuKGAde34zkYFBybtjy14hUp2mJNTPx+bMna9+TwbhkN3Om06fFoiS86elHJrhhUP1Z7Gw9h9rysijPxDXEMxUOWqb0QaMNwOGFs1/13v1f7jCTacYW8+BgT3us74/NRRxUwf33E6rKCoE7FC8B786e8z1Zk8m22Fyo1aVG/CGfbZn6lDa1oht9QzPsNsLvnDyCRKchQqevNNWxK1n4Zy8ciP2vTPW1tnWUtwKauDRiHWrt3leY/pre7Dan30DvJpSBY+e9wpw3hl5Ws+8E1pHow44VeUWPP/hv9Gne0q27/gBHW5heuDcKqLuNGaMDUFc5ptg4z7I2dLFazCngEP/pe8GZzY2llRGc2AuDgjlBwTarI1A1/QjYGPqPzvazJ5pofABSxDw2AAbL7tjnm9/sZmuiYZ8AZHl03Zdj6i01x6oKskjsyGalDtxt1tiL0XdoY+a6W81IEZbg6hsahDaKTFNpy2QstpZIMYKwsLOQobG+bqeLKqnOFlxkxd0GS8owp6s2d9AihJ7DjYNQ9b3VMj9oWKhBPuSlq9SC0g0ZqabpnTExSRnYe1tZ6c23zTZybiMeJNpqB9MEK3MNXrOC+O8xDd6pY4YBiO9x2GnM3zsMWLEHkViC2eoUxuefIy/TdMzjCqa0HGOR239WduZITrhWZHHOVKITpDy0/jTozjFAn8kFh0VQ713Tp069kgcvZ77LEJfuI7lrxUskvC1Qv7i442Y0MgD7/JUr2akkv7lsXLa19v0L+AnvyJIf4lx+muW9BdBvGYVR6g2/9FlGrlq4UCtKyVe+bALybIi1bw+YP1WTnqpm/7a+ZQX4+mv7v//lwsBtRF8/YHcbbXWKjRUJd5fzaC+oF7mul8AAAAASUVORK5CYII=) no-repeat
    }
    .gouwu {
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAABCFBMVEUAAAD/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/L2D/////+vv/OGf//f3/7/P/6u//ZIn/Vn7/NGT/3eX/wtD/fJv/XoT/1N7/prv/iaX/P2z/rsH/qr7/orj/kKr/gJ7/eZn/cpP/MmL/9/n/x9X/vc3/m7P/RnL/0dv/tsf/g6D/TXf/8/b/4ej/t8j9bqdtAAAAMnRSTlMABPTB4NIpDp+Z+81fFhAJ6Lxx5LFORUDtqXfw6tejj4R8Y1g5JBsL99q4yJRsW1VJNMPcgFIAAANFSURBVFjDrdjnVuJgEAbgCRDqAoIoxa6Ivb2hSBOwYq+7e/93svk8HJeSGVJ4/nlyMn5lCkBTxBePDlMrcz7s5vb01OHRYpzc21lY0zFBX1vYIRe007wPDF/+VCNnQukARIF0yMleCzlMlSvY3vnWPGyZ3yI7tlOwLbVNU/3ywQHfL5Ilw3AonBTTOAbHYkKqBwNwIRBk483BlbkgE28ZLi1bRizNw7X5ksX9xuCBPnnXq/BklcZswqPNsXrzwSPfaBX64Zl/pIAxA0NlHZqe0c3H6fn9v+VuQFTpt2tG9bzdr0C0QQOJJUguzo2B8wtIlhKDgGlxr9fGkOsmBIXBfBNr7sYYcSNWoEbKgrhfFaXc61QqnV7ZMIm7XiAlI91HTR1dA98a6jBr0s1kyBTaBa+v1tfAQEOtsQ/ersqcEwhezAg9/OiZf7YhOCEicSz9MSN08KOjDkAcWUQkzpEnM0JzKIfUCYjzhagEBwEr0wKiJCTNfatqWKm27oXE4ev40+B98vXM3sljTQhYe2RvhW2tX4bki2+zK8yTumG6bE7Wzqt60AFjhbjp/mC+1oIVdRYP7Mwnbjpdmq+9wEpXLZ2dVQSG2tktW46v4LABr9l13KpGywfk2n+bPalLqUMs0RzAnlSDva4uO/pIZ56oZnoFKw2p5azQPvPErOMnWLpS9QxGiiL8Wy1Y+80sXolQGuy+nmGtxRyvkqZFvvJuhASoM88WKRFlx+cdN6r5aRpNEHPNd+ZLXB+94/+ZTkRrTDnw27pnqxJrRMwhfpgvvTEB1ez74I6QSMvBwrOZa1xbfmMzIKeRKcKkRrkpBGwxWagUuS7aq1jn/F81VWClSN9imFQ2BNx0jgkf2d8N2bv0sV0LWFRKVYxXtUqpgCZ9jap3y/x+u3X5y5QWwwzoGv3IYgayNCQMz8I0LBGAR4EEjchG4Uk0S2MK8KRAs/1Kv0qTtBRc82tkIeQ6G2MhspTwu1xfghjJDFzIJImlReBYRHPy86H3HxApqMMBPUhTJdejtstjPUl2BPdhy36Q7Mr6bSRLlpwo5qPiZvNFciqePgDjIB0nV+JbkT2M2YtsxcmL0NnxejiT8vsz+cj68VmIpvgHxdTVimWzl58AAAAASUVORK5CYII=) no-repeat
    }

</style>
