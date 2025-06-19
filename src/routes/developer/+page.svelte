<script>
    import {base} from '$app/paths';
	import AnyContact from "$lib/components/AnyContact.svelte";
	import AnyEducation from "$lib/components/AnyEducation.svelte";
	import AnyOnline from "$lib/components/AnyOnline.svelte";
	import DevExperience from "$lib/components/DevExperience.svelte";
	import DevInterests from "$lib/components/DevInterests.svelte";
	import DevPersonal from "$lib/components/DevPersonal.svelte";
	import DevSkills from "$lib/components/DevSkills.svelte";
	import DevTitle from "$lib/components/DevTitle.svelte";
	import DevTraining from "$lib/components/DevTraining.svelte";
	import DevWeb from "$lib/components/DevWeb.svelte";
	import DevWork from "$lib/components/DevWork.svelte";
</script>

<div class="bg-gray-darkest bg-pr-white">
    <div class="container-lg bg-gray-lightest bg-pr-white box-shadow-10">
        <AnyOnline></AnyOnline>
        <div class="row dis-md-flex">

            <!-- Header -->
            <header class="col-md-1of3 bg-primary bg-pr-white p-tn-9 p-xs-18">
                <div class="p-tn-v-9 p-md-b-18 text-tn-right text-md-left">
                    <a href="{base}/" class="bg-gray-lighter cl-gray-darker bd-radius-3 p-tn-tb-6 p-tn-rl-18 m-tn-r-3">Home</a> 
                </div>
                <div class="m-md-b-144">
                    <DevTitle></DevTitle>
                </div>
                <div class="dis-tn-none dis-md-block">
                    <div class="m-tn-b-54">
                        <AnyContact></AnyContact>
                    </div>
                    <DevWeb></DevWeb>
                </div>
            </header>
            <!-- /Header -->

            <!-- Content -->
            <div class="col-md-2of3 p-tn-9 p-xs-18 p-md-36 p-pr-t-0">

                <!-- Contact & Web -->
                <div class="row dis-tn-block dis-md-none">
                    <div class="m-tn-b-54 col-sm-1of2">
                        <AnyContact></AnyContact>
                    </div>
                    <div class="m-tn-b-36 col-sm-1of2">
                        <DevWeb></DevWeb>
                    </div>
                </div>
                <!-- /Contact & Web -->

                <!-- Personal -->
                <div class="m-tn-b-54 m-pr-b-50">
                    <DevPersonal></DevPersonal>
                </div>
                <!-- /Personal -->

                <!-- Skills -->
                <div class="m-tn-b-54 m-pr-b-50">
                    <DevSkills></DevSkills>
                </div>
                <!-- /Skills -->

                <!-- Interests -->
                <div class="m-tn-b-63 m-pr-b-50">
                    <DevInterests></DevInterests>
                </div>
                <!-- /Interests -->

                <!-- Training -->
                <div class="m-tn-b-27">
                    <DevTraining></DevTraining>
                </div>
                <!-- /Training -->

                <!-- Work -->
                <div class="m-tn-b-63">
                    <DevWork></DevWork>
                </div>
                <!-- /Work -->

                <!-- Experience -->
                <div class="m-tn-b-63">
                    <DevExperience></DevExperience>
                </div>
                <!-- /Experience -->

                <!-- Education -->
                <div class="m-tn-b-54">
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