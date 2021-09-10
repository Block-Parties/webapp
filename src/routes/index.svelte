<script lang="ts">
    import Carousel from "$lib/components/landing/Carousel.svelte"

    async function downloadExtension() {
        open("TODO")
    }

    async function browse() {
        location.href = "/browse"
    }
</script>

<div class="section-one">
    <h1>Come join the party!</h1>
    <p>Block Parties makes transacting together easy.</p>

    <div>
        <button class="filled" on:click={downloadExtension}>Download now - it's free!</button>
        <button class="outlined" on:click={browse}>Browse</button>
    </div>

    <img class="clump" src="images/clumps/clump_1.png" alt="" />
</div>

<div class="section-two">
    <h2>How it works</h2>

    <Carousel>
        <div class="carousel-item">
            <div class="description">
                <h2>Browse</h2>
                <p>Download our free chrome extension to browse the OpenSea NFT marketplace and start a “party”.</p>
            </div>
            <img src="images/how_it_works/browse.png" alt="" />
        </div>
        <div class="carousel-item">
            <div class="description">
                <h2>Invest</h2>
                <p>Once your party's been made, share it with friends and invest!</p>
            </div>
            <img src="images/how_it_works/invest.png" alt="" />
        </div>
        <div class="carousel-item">
            <div class="description">
                <h2>Resell</h2>
                <p>When enough funds are pooled to buy it, we'll buy and relist it. When it's sold, you profit!</p>
            </div>
            <img src="images/how_it_works/resell.png" alt="" />
        </div>
    </Carousel>

    <img class="clump1" src="images/clumps/clump_2.png" alt="" />
    <img class="clump2" src="images/clumps/clump_3.png" alt="" />
</div>

<div class="section-three">
    <!-- <h2>Blog</h2>

    <div class="blog-row">
        <a href="/blog"><img src="images/logo_white.png" alt="" /></a>
        <a href="/blog"><img src="images/logo_white.png" alt="" /></a>
        <a href="/blog"><img src="images/logo_white.png" alt="" /></a>
        <a href="/blog"><img src="images/logo_white.png" alt="" /></a>
    </div> -->

    <img class="clump" src="images/clumps/clump_4.png" alt="" />
</div>

<style lang="scss">
    .section-one {
        position: relative;
        background: #e5e5e5;
        min-height: 400px;

        padding: 80px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        h1,
        p {
            color: #170d4d;
        }

        p {
            font-size: x-large;
            margin: 0 0 48px 0;
        }

        button {
            cursor: pointer;
            transition: all 0.3s;
            border-radius: 10px;
            height: 44px;
            padding: 0 16px;

            font-size: medium;
            font-weight: 500;

            border: 2px solid #ff551f;

            &.filled {
                background: #ff551f;

                &:hover {
                    background: #dd330c;
                }
            }

            &.outlined {
                background: #00000000;
                color: #ff551f;

                &:hover {
                    background: white;
                }
            }
        }

        .clump {
            position: absolute;
            top: 10%;
            right: 0;
            height: 80%;
        }
    }

    .section-two {
        position: relative;
        padding: 80px;
        display: flex;
        flex-direction: column;
        align-items: center;

        h2 {
            color: #170d4d;
            margin-bottom: 64px;
        }

        .carousel-item {
            display: flex;
            align-items: center;

            h2 {
                color: #170d4d;
                font-weight: 500;
                margin: 0;
            }

            p {
                font-weight: 300;
                color: #170d4d;
                line-height: 1.5;
            }

            img {
                margin-left: 32px;
            }
        }

        img {
            width: 60%;
        }

        .clump1 {
            position: absolute;
            left: 80px;
            top: -72px;
            width: 128px;
        }

        .clump2 {
            position: absolute;
            right: 0;
            bottom: -96px;
            width: 128px;
        }
    }

    .section-three {
        padding: 80px 80px 0 80px;
        background: #170d4d;
        margin-bottom: -32px;

        .blog-row {
            display: flex;
            justify-content: space-between;
            margin-top: 64px;

            img {
                flex: 1;
                background: gray;
                padding: 32px;
            }
        }

        .clump {
            height: 128px;
            position: relative;
            left: -80px;
            top: 16px;
        }
    }
</style>
