<script>
	import AnyContact from "$lib/components/AnyContact.svelte";
	import AnyEducation from "$lib/components/AnyEducation.svelte";
	import AnyOnline from "$lib/components/AnyOnline.svelte";
	import PreachExperience from "$lib/components/PreachExperience.svelte";
	import PreachGifts from "$lib/components/PreachGifts.svelte";
	import PreachPersonal from "$lib/components/PreachPersonal.svelte";
	import PreachSermons from "$lib/components/PreachSermons.svelte";
	import PreachTitle from "$lib/components/PreachTitle.svelte";
	import PreachWeb from "$lib/components/PreachWeb.svelte";

</script>

<div class="bg-gray-darkest bg-pr-white">
    <div class="container-lg bg-gray-lightest bg-pr-white box-shadow-10">
        <AnyOnline></AnyOnline>
        <div class="row dis-md-flex">

            <!-- Header -->
            <header class="col-md-1of3 bg-primary bg-pr-white p-tn-9 p-xs-18">
                <div class="p-tn-v-9 p-md-b-18 text-tn-right text-md-left">
                    <a href="/" class="bg-gray-lighter cl-gray-darker bd-radius-3 p-tn-tb-6 p-tn-rl-18 m-tn-r-3">Home</a> 
                </div>
                <div class="m-md-b-144">
                    <PreachTitle></PreachTitle>
                </div>
                <div class="dis-tn-none dis-md-block">
                    <div class="m-tn-b-54">
                        <AnyContact></AnyContact>
                    </div>
                    <PreachWeb></PreachWeb>
                </div>
            </header>
            <!-- /Header -->

            <!-- Content -->
            <div class="col-md-2of3 p-tn-9 p-xs-18 p-md-36">

                <!-- Contact & Web -->
                <div class="row dis-tn-block dis-md-none">
                    <div class="m-tn-b-54 col-sm-1of2">
                        <AnyContact></AnyContact>
                    </div>
                    <div class="m-tn-b-36 col-sm-1of2">
                        <PreachWeb></PreachWeb>
                    </div>
                </div>
                <!-- /Contact & Web -->

                <!-- Personal -->
                <div class="m-tn-b-54">
                    <PreachPersonal></PreachPersonal>
                </div>
                <!-- /Personal -->

                <!-- Sermons -->
                <div class="m-tn-b-54">
                    <PreachSermons></PreachSermons>
                </div>
                <!-- /Sermons -->

                <!-- Gifts -->
                <div class="m-tn-b-54">
                    <PreachGifts></PreachGifts>
                </div>
                <!-- /Gifts -->

                <!-- Experience -->
                <div class="m-tn-b-63">
                    <PreachExperience></PreachExperience>
                </div>
                <!-- /Experience -->

                <!-- Education -->
                <div class="m-tn-b-54 pg-br-before-always">
                    <AnyEducation></AnyEducation>
                </div>
                <!-- /Education -->

                <!-- References -->
                <!-- <div class="m-tn-b-54">
                    <AnyReferences></AnyReferences>
                </div> -->
                <!-- /References -->

            </div>
            <!-- /Content -->

        </div>
    </div>
</div>