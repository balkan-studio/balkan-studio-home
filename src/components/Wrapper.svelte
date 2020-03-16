<style lang="scss" >

    div {
        flex: 14 14 0;
        display: flex;
        flex-flow: column;
    }
    main {
		position: relative;
		box-sizing: border-box;
        color: #222;
        background-color: #eee;
        overflow-x: hidden;
        overflow-y: auto;
        will-change: scroll-position;
        height: 100%;
        width: 100%;
	}

    nav {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: .3em 0;
        min-height: 2.222em;
        box-shadow: 0px 2px 3px 2px #c0c9d2;
        z-index: 1;
    }
</style>
<div id='doc'>
<nav>
<slot name="Nav"></slot>
</nav>
<main>
    <slot></slot>
</main>
</div>
