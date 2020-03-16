<script>
	import Primary from '$components/Primary.svelte';
	import Wrapper from '$components/Wrapper.svelte';
    import NavList from '$components/NavList.svelte';
	export let segment;
    let items = [
        {title: 'Home', icon: ''}, 
        {title: 'About', icon: '', slug: 'about'}
    ]; 
</script>
<style lang="scss" >
    div {
        display: flex;
        overflow: hidden;
        position: relative;
        width: 100%;
        height:100%;
    }
</style>
<svelte:head>
<script src="js/anime.min.js"></script>
</svelte:head>
<Primary>
    <div>
        <Wrapper>
            <header slot="Nav">
                <NavList {items} {segment} />
            </header>
            <slot></slot>
        </Wrapper>
    </div>
</Primary>
