<script>
    const dates = [
        {id: "elizabeth", month: 12, day: 3, year: 2001},
        {id: "jonathan", month: 8, day: 2, year: 2004},
        {id: "phoebe", month: 4, day: 13, year: 2006},
        {id: "harrison", month: 6, day: 6, year: 2010},
        {id: "anniversary", month: 8, day: 9, year: 2000},
        {id: "work", month: 6, day: 1, year: 2014},
    ];

    const getYears = (id) => {
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth() + 1;
        const currentDay = currentDate.getDate();
        const currentYear = currentDate.getFullYear();

        let dateData = dates.find(date => date.id === id);
        let age = currentYear - dateData.year;
        
        if (currentMonth <= dateData.month && currentDay < dateData.day)  {
            age = age - 1;
        }

        return age;
    };
</script>

<section>
    <h2 class="cl-danger m-tn-b-12 pg-br-after-avoid">Personal</h2>
    <p class="pg-br-inside-avoid m-tn-b-18">I was raised in a Christian home on a farm in northeastern Missouri. During my youth I became a Christian and decided to enter the preaching ministry.</p>
    
    <p class="pg-br-inside-avoid m-tn-b-18">Upon graduating Central Christian College of the Bible, I served in occupational ministry for 16 years. For the past {getYears('work')} years I have worked in web application development. But I have continued to preach and teach on a volunteer basis.</p>
    
    <p class="pg-br-inside-avoid">My wife Lanaya and I have been married for {getYears('anniversary')} years. We have two daughters, Elizabeth ({getYears('elizabeth')}) and Phoebe ({getYears('phoebe')}), and two sons, Jonathan ({getYears('jonathan')}) and Harrison ({getYears('harrison')}).</p> 
</section>