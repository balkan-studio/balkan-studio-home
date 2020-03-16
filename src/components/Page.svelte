<script>
	let className = 'layout-default' ;

	export { className as class };
</script>
<style>
div {
    width: 70em;
    max-width: 100%;
    margin: 0 auto;
}
</style>
<div id='page' class='{className}'>
    <slot name='header'></slot>
    <slot></slot>
</div>
