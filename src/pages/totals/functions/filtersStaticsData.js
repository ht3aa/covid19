export const filtersStaticsData = (data) => {
    if(!data) return;

    const filterdData = {
        todayInjured: "",
        totalInjured: "",
        totalHealing: "",
        totalDeaths: "",
    }

    const todayInjuredRegExp = new RegExp(/صابات اليوم[0-9.]+/gm);
    const totalInjuredRegExp = new RegExp(/المصابون[0-9.]+/gm);
    const totalHealingRegExp = new RegExp(/المتعافون[0-9.]+/gm);
    const totalDeathsRegExp = new RegExp(/الوفيات[0-9.]+/gm);

    for(let i = 0; i < data.length; i++) {
        
        if(data[i].match(totalInjuredRegExp)) {
            let matchData = data[i].match(totalInjuredRegExp);
            filterdData.totalInjured = matchData[0].replace(/[المصابون]/g, '').replaceAll('.', ',');
        }

        if(data[i].match(todayInjuredRegExp)) {
            let matchData = data[i].match(todayInjuredRegExp);
            filterdData.todayInjured = matchData[0].replace(/[صابات اليوم]/g, '').replaceAll('.', ',');
        }

        if(data[i].match(totalHealingRegExp)) {
            let matchData = data[i].match(totalHealingRegExp);
            filterdData.totalHealing = matchData[0].replace(/[المتعافون]/g, '').replaceAll('.', ',');            
        }

        if(data[i].match(totalDeathsRegExp)) {
            let matchData = data[i].match(totalDeathsRegExp);
            filterdData.totalDeaths = matchData[0].replace(/[الوفيات]/g, '').replaceAll('.', ',');            
        }
        
    }
    return filterdData;
}