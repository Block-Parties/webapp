<script>
    import Popup from "../common/Popup.svelte"

    export let party

    async function tweet() {
        open(
            `https://twitter.com/intent/tweet?text=Come%20join%20my%20NFT%20party%20on%20%40block_parties%21&url=https://blockparties.io/parties/${party.id}`
        )
    }

    async function shareTelegram() {
        open(
            `https://t.me/share/url?url=https://blockparties.io/parties/${party.id}&text=Come%20join%20my%20NFT%20party%20on%20%40block_parties%21`
        )
    }
</script>

<Popup on:close>
    <div class="background" />
    <div class="faded" />
    <div class="content">
        <!-- <img class="background" src="/images/clumps/clump_5.png" alt="" /> -->

        <h3>Congrats on joining a party!</h3>
        <p>Your deposit went through! Why not share your party on social media to get it funded faster?</p>

        <div class="socials">
            <div class="circle" on:click={tweet}>
                <img class="svg" src="/images/twitter.svg" alt="" />
            </div>

            <div class="circle" on:click={shareTelegram}>
                <img class="svg" src="/images/telegram.svg" alt="" />
            </div>
        </div>
    </div>
</Popup>

<style lang="scss">
    .background,
    .faded {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 8px;
    }

    .background {
        background: url("/images/clumps/clump_5.png");
    }

    .faded {
        // background: #cccccc1a;
    }

    .content {
        position: relative;

        .background {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;

            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }

        h3 {
            color: #170d4d;
            text-align: center;
            font-size: x-large;
            font-weight: 600;
        }

        p {
            color: #4f4f4f;
            font-size: medium;
            line-height: 1.5;

            margin: 32px 16px;
        }
    }

    .socials {
        display: flex;
        padding: 0 16px 16px 16px;

        .circle {
            cursor: pointer;
            height: 40px;
            width: 40px;
            background: #f2f2f2;
            border-radius: 20px;

            display: flex;
            align-items: center;
            justify-content: center;

            margin-right: 16px;

            img {
                width: 60%;
                margin: auto;
            }
        }
    }

    .svg {
        filter: invert(51%) sepia(0%) saturate(0%) hue-rotate(196deg) brightness(101%) contrast(95%);
    }
</style>
