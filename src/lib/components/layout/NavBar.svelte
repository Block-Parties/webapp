<script lang="ts">
  import WalletHelper from '$lib/api/wallet_helper'

  async function goHome() {
    location.href = '/'
  }

  async function connect() {
    console.log('ASD')
    WalletHelper.connect()
  }
</script>

<div class="outer">
  <div class="logo" on:click={goHome}>
    <img src="/images/logo.svg" alt="logo" />
    <h2>BlockParties</h2>
  </div>

  <nav>
    <a href="/browse">Browse</a>
    <a href="/my-parties">My Parties</a>
    <button on:click={connect}>Connect Wallet</button>
  </nav>
</div>

<style lang="scss">
  .outer {
    position: sticky;
    top: 0;
    z-index: 100;

    display: flex;
    background: white;
    align-items: center;
    justify-content: space-between;
    padding: 0 80px;

    border-bottom: 2px solid #e0e0e0;
  }

  .logo {
    cursor: pointer;
    display: flex;

    h2 {
      color: #170d4d;
      margin-left: 8px;
    }

    img {
      height: 28px;
      margin: auto;
    }
  }

  a {
    color: #170d4d;
    font-size: large;
    text-decoration: none;
    margin-right: 64px;

    &.active {
      text-decoration: underline;
    }
  }

  button {
    cursor: pointer;
    background: #170d4d;
    border: none;
    border-radius: 10px;
    padding: 10px 16px;

    color: white;
    font-size: medium;
  }
</style>
