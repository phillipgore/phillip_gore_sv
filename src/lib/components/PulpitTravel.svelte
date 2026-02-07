<script>
	import { Map, TileLayer, Circle } from 'sveaflet';
</script>

<section class="m-tn-b-neg-12">
    <h2 class="cl-danger m-tn-b-12 pg-br-after-avoid">Travel</h2>
    <p class="pg-br-inside-avoid m-tn-b-18">I will generally travel up to 2 hours from my home in <span class="text-rtl txt-tn-left">OM ailadnaV</span>. We may be able to work something out for distances greater than 2 hours depending on the situation.</p>
    <div style="width: 100%; height: 21.875rem;">
        <Map options={{ center: [39.311, -91.490], zoom: 7 }}>
            <TileLayer url={'https://tile.openstreetmap.org/{z}/{x}/{y}.png'} />
            <Circle 
                latLng={[39.311, -91.490]}
                options={{
                    color: '#b23f39',
                    fillColor: '#b23f39',
                    fillOpacity: 0.15,
                    radius: 142000
                }}
            />
        </Map>
    </div>
</section>