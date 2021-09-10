<script lang="ts">
</script>

<footer>
    <div class="header">
        <img src="/images/logo_white.png" alt="logo" />
        <h2>Block Parties</h2>
    </div>

    <div class="body">
        <div class="column">
            <h3>Product</h3>
            <a href="/TODO">How it works</a>
            <a href="/browse">Browse</a>
            <a href="/my-parties">My parties</a>
        </div>

        <div class="column">
            <h3>Account</h3>
            <a href="/faq">FAQ</a>
            <a href="https://discord.gg/MG73GUKDyW">Get in touch</a>
        </div>

        <div class="socials">
            <h3>Follow Us</h3>
            <a href="https://twitter.com/block_parties"><img src="/images/twitter.svg" /></a>
            <a href="https://discord.gg/MG73GUKDyW"><img src="/images/discord.svg" /></a>
        </div>

        <div class="email-input">
            <input placeholder="Put your email here..." />
            <button>Join the party!</button>
        </div>
    </div>
</footer>

<style lang="scss">
    footer {
        background: #170d4d;
        padding: 80px;
    }

    .header {
        display: flex;
        align-items: center;

        img {
            // width: 50px;
            height: 32px;
            margin-right: 8px;
        }
    }

    .body {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;

        .column {
            flex: 1;
            min-width: 128px;

            display: flex;
            flex-direction: column;

            h3 {
                font-weight: 600;
                margin-bottom: 8px;
                font-size: large;
            }

            a {
                margin: 8px 0;
                font-weight: 300;
                font-size: smaller;

                transition: all 0.3s;
                text-decoration-color: #ffffff00;

                &:hover {
                    text-decoration-color: #ffffffff;
                }
            }
        }

        .socials {
            img {
                width: 32px;
            }
        }

        .email-input {
            flex: 1.5;
            display: flex;
            justify-content: right;
            // margin-top: 16px;
            // margin-left: 64px; // TODO
            min-width: 300px;

            // ju-self: flex-end;

            input {
                height: 40px;
                border-radius: 10px 0 0 10px;
                padding: 0 16px;
                border: none;
            }

            button {
                cursor: pointer;
                height: 40px;
                background: #ff551f;
                border: none;
                border-radius: 0px 10px 10px 0px;
                padding: 0 16px;
                margin-left: -8px;
            }
        }
    }
</style>
