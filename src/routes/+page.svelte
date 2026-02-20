<script>
    import {base} from '$app/paths';
	import pgAvatar from '$lib/assets/pg-avatar.jpg';
</script>

<div class="bg-gray-darkest bg-pr-white">
    <div class="container-lg full-height bg-gray-lightest bg-pr-white box-shadow-10">
        <div class="pos-middle full-width txt-tn-center">
            <img class="avatar img-height-tn-90 img-height-md-144" alt="Phillip's Face" src="{pgAvatar}" />
            <h1 class="cl-danger txt-tn-center ln-height-125 p-tn-t-9 m-tn-b-27">
                Welcome. 
                <div class="subtitle cl-gray-dark cl-pr-black txt-tn-center m-tn-0">Which would you<br class="dis-sm-none"> like to view?</div>
            </h1>
            <div class="p-tn-b-1">
                <a href="{base}/developer" class="bg-gray-lighter cl-gray-darker bd-radius-3 p-tn-tb-6 p-tn-rl-18 m-tn-r-3">Developer Resume</a> 
                <a href="{base}/preacher" class="bg-gray-lighter cl-gray-darker bd-radius-3 p-tn-tb-6 p-tn-rl-18 m-tn-l-3">Preacher Resume</a>
            </div>
            <div class="p-tn-t-21">
                <a href="{base}/pulpit-supply" class="bg-gray-lighter cl-gray-darker bd-radius-3 p-tn-tb-6 p-tn-rl-18 m-tn-l-3">Pulpit Supply</a>
            </div>
        </div>
    </div>
</div>