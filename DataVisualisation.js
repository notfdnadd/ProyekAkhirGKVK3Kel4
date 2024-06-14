// GDP Agricultural Sector Thailand 2011-2021
const gdpPlot = document.getElementById('gdpPlot');

const gdpData = [{
    x: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
    y: [11.59179178, 11.50410015, 11.32221534, 10.08892162, 8.872723648, 8.478076963, 8.406412587, 8.201819262, 8.12856804, 8.702766707, 8.708375671], 
    type: 'scatter', 
    mode: 'lines+markers', 
    line: {
        color: '#FF5733'  
    },
    marker: {
        size: 8
    }
}];

const gdpLayout = {
    title: 'GDP Agricultural Sector Thailand (2011-2021)',
    xaxis: {
        title: {
            text: 'Year',
            font: {
                size: 14
            }
        },
        tickmode: 'array',
        tickvals: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
    },
    yaxis: {
        title: 'Harvested Land',
        automargin: true,
    },
    font: { size: 14 },
};

const gdpConfig = { responsive: true };
Plotly.newPlot(gdpPlot, gdpData, gdpLayout, gdpConfig);


// Fertilizer Consumption (% of Fertilizer Production) in Thailand (2011-2021)
const fertilizerPlot = document.getElementById('fertilizerPlot');

const fertilizerData = [{
    x: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
    y: [2013.518543, 1934.50583, 1492.314988, 1585.50552, 1904.314184, 2181.999296, 2102.598676, 2507.952038, 2625.959747, 2302.653691, 2574.1045], 
    type: 'scatter', 
    mode: 'lines+markers',
    line: {
        color: '#33FF57'
    },
    marker: {
        size: 8
    }
}];

const fertilizerLayout = {
    title: 'Fertilizer Consumption (% of Fertilizer Production) in Thailand (2011-2021)',
    xaxis: {
        title: 'Year',
        tickmode: 'array',
        tickvals: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
    },
    yaxis: {
        title: 'Fertilizer Consumption (%)',
        automargin: true,
    },
    font: { size: 14 },
};

const fertilizerConfig = { responsive: true };
Plotly.newPlot(fertilizerPlot, fertilizerData, fertilizerLayout, fertilizerConfig);


// Agricultural Land (% of land area) in Thailand (2011-2021)
const agriculturalLandPlot = document.getElementById('agriculturalLandPlot');

const agriculturalLandData = [{
    x: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
    y: [44.68280843, 44.69063791, 44.69898687, 44.71021159, 44.71804107, 44.71021159, 44.71999843, 44.717447, 45.01947582, 45.55168373, 45.99816007], 
    type: 'scatter', 
    mode: 'lines+markers',
    line: {
        color: '#3357FF'
    },
    marker: {
        size: 8
    }
}];

const agriculturalLandLayout = {
    title: 'Agricultural Land (% of land area) in Thailand (2011-2021)',
    xaxis: {
        title: 'Year',
        tickmode: 'array',
        tickvals: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
    },
    yaxis: {
        title: 'Agricultural Land (% of land area)',
        automargin: true,
    },
    font: { size: 14 },
};

const agriculturalLandConfig = { responsive: true };
Plotly.newPlot(agriculturalLandPlot, agriculturalLandData, agriculturalLandLayout, agriculturalLandConfig);


// Arable Land (% of land area) in Thailand (2021-2011)
const arableLandPlot = document.getElementById('arableLandPlot');

const arableLandData = [{
    x: ['2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011'],
    y: [33.56887001, 33.22026209, 32.88379103, 32.77749907, 32.7800505, 33.01493472, 33.10105894, 33.35747421, 33.93346004, 34.12084793, 34.30875531], 
    type: 'scatter', 
    mode: 'lines+markers',
    line: {
        color: '#F1C40F' 
    },
    marker: {
        size: 8
    }
}];

const arableLandLayout = {
    title: 'Arable Land (% of land area) in Thailand (2011-2021)',
    xaxis: {
        title: 'Year',
        tickmode: 'array',
        tickvals: ['2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011'],
    },
    yaxis: {
        title: 'Arable Land (% of land area)',
        automargin: true,
    },
    font: { size: 14 },
};

const arableLandConfig = { responsive: true };
Plotly.newPlot(arableLandPlot, arableLandData, arableLandLayout, arableLandConfig);


// Permanent Cropland (% of land area) in Thailand (2011-2021)
const croplandPlot = document.getElementById('croplandPlot');

const croplandData = [{
    x: ['2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011'],
    y: [10.86339525, 10.76552683, 10.56978997, 10.37405312, 10.37405312, 10.12938206, 10.05108732, 9.786842569, 9.199632015, 9.003895163, 8.808158312], 
    type: 'scatter', 
    mode: 'lines+markers',
    line: {
        color: '#9B59B6'
    },
    marker: {
        size: 8
    }
}];

const croplandLayout = {
    title: 'Permanent Cropland (% of land area) in Thailand (2011-2021)',
    xaxis: {
        title: 'Year',
        tickmode: 'array',
        tickvals: ['2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011'],
    },
    yaxis: {
        title: 'Permanent Cropland (% of land area)',
        automargin: true,
    },
    font: { size: 14 },
};

const croplandConfig = { responsive: true };
Plotly.newPlot(croplandPlot, croplandData, croplandLayout, croplandConfig);


// Forest Area (% of land area) in Thailand (2011-2021)
const forestAreaPlot = document.getElementById('forestAreaPlot');

const forestAreaData = [{
    x: ['2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011'],
    y: [38.82831921, 38.89878447, 38.96924974, 39.03971501, 39.11018027, 39.18064554, 39.26676975, 39.27146744, 39.27616512, 39.28086281, 39.28556049], 
    type: 'scatter', 
    mode: 'lines+markers',
    line: {
        color: '#008000' 
    },
    marker: {
        size: 8
    }
}];

const forestAreaLayout = {
    title: 'Forest Area (% of land area) in Thailand (2011-2021)',
    xaxis: {
        title: 'Year',
        tickmode: 'array',
        tickvals: ['2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011'],
    },
    yaxis: {
        title: 'Forest Area (% of land area)',
        automargin: true,
    },
    font: { size: 14 },
};

const forestAreaConfig = { responsive: true };
Plotly.newPlot(forestAreaPlot, forestAreaData, forestAreaLayout, forestAreaConfig);


// Pie chart of Employment in Agriculture (Based on Gender)
// Data for Employment in Agriculture, Female (% of female employment)
const femaleEmploymentData = [
    28.44256861, 28.00203926, 28.34160678, 29.24011353, 28.5523394,
    28.47860429, 29.86997415, 31.20571467, 36.97502404, 40.36474868, 39.19976299
];

// Data for Employment in Agriculture, Male (% of male employment)
const maleEmploymentData = [
    34.83632013, 34.25768627, 34.13960153, 34.67663294, 34.01810429,
    33.53242004, 34.39866374, 35.4017918, 41.24860277, 43.66600861, 42.56986252
];

// Calculate averages
const averageFemaleEmployment = femaleEmploymentData.reduce((acc, val) => acc + val, 0) / femaleEmploymentData.length;
const averageMaleEmployment = maleEmploymentData.reduce((acc, val) => acc + val, 0) / maleEmploymentData.length;

// Create Pie Chart for Employment in Agriculture
const pieChartEmployment = document.getElementById('pieChartEmployment');

const dataEmployment = [{
    values: [averageFemaleEmployment, averageMaleEmployment],
    labels: ['Female Employment', 'Male Employment'],
    type: 'pie',
    marker: {
        colors: ['#FFA07A', '#6495ED']
    }
}];

const layoutEmployment = {
    title: 'Average Employment in Agriculture (2011-2021)',
    font: { size: 14 },
};

const configEmployment = { responsive: true };
Plotly.newPlot(pieChartEmployment, dataEmployment, layoutEmployment, configEmployment);


// Pie chart of Agricultural land and Forest area (% of land area)
// Data for Agricultural land (% of land area) and Forest area (% of land area)
const agriculturalLandChartData = [
    33.56887001, 33.22026209, 32.88379103, 32.77749907, 32.7800505, 
    33.01493472, 33.10105894, 33.35747421, 33.93346004, 34.12084793, 34.30875531
];

const forestAreaChartData = [
    38.82831921, 38.89878447, 38.96924974, 39.03971501, 39.11018027, 
    39.18064554, 39.26676975, 39.27146744, 39.27616512, 39.28086281, 39.28556049
];

// Calculate "Others" as (100 - Agricultural land - Forest area)
const calculateOthersChartData = (agriculturalLand, forestArea) => {
    const total = 100; // Total percentage
    return total - agriculturalLand - forestArea;
};

// Calculate averages for each category
const agriculturalLandAvg = agriculturalLandChartData.reduce((acc, val) => acc + val, 0) / agriculturalLandChartData.length;
const forestAreaAvg = forestAreaChartData.reduce((acc, val) => acc + val, 0) / forestAreaChartData.length;
const othersAvg = calculateOthersChartData(agriculturalLandAvg, forestAreaAvg);

const dataLandUse = [{
    values: [agriculturalLandAvg, forestAreaAvg, othersAvg],
    labels: ['Agricultural Land', 'Forest Area', 'Others'],
    type: 'pie',
    marker: {
        colors: ['#003478', '#008000', '#D3D3D3']
    }
}];

const layoutLandUse = {
    title: 'Average Land Use Distribution in Thailand (2011-2021)',
    font: { size: 14 },
};

const configLandUse = { responsive: true };

// Create the pie chart for land use
Plotly.newPlot('pieChartLandUse', dataLandUse, layoutLandUse, configLandUse);


// Data for Agricultural raw materials imports (% of merchandise imports)
const importsPlot = document.getElementById('importsPlot');

const importsData = [{
    x: ['2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011'],
    y: [1.68419811, 1.345057675, 1.521008813, 1.550367641, 1.687667119, 1.640667355, 1.630416528, 1.618594134, 1.523071631, 1.713652395, 1.920914828], 
    type: 'scatter', 
    mode: 'lines+markers',
    line: {
        color: '#1ABC9C' 
    },
    marker: {
        size: 8
    }
}];

const importsLayout = {
    title: 'Agricultural Raw Materials Imports (% of Merchandise Imports) - 2011 to 2021',
    xaxis: {
        title: 'Year',
        tickmode: 'array',
        tickvals: ['2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011'],
    },
    yaxis: {
        title: 'Import Percentage (%)',
        automargin: true,
    },
    font: { size: 14 },
};

const importsConfig = { responsive: true };

// Create the plot
Plotly.newPlot(importsPlot, importsData, importsLayout, importsConfig);


// Data for Agricultural raw materials exports (% of merchandise exports)
const exportsPlot = document.getElementById('exportsPlot');

const exportsData = [{
    x: ['2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011'],
    y: [4.16646491, 3.629775015, 3.851015232, 4.042967037, 4.920355154, 3.862982262, 3.75814698, 3.911260683, 4.809587976, 4.934896779, 7.051876039], 
    type: 'scatter', 
    mode: 'lines+markers',
    line: {
        color: '#E67E22' 
    },
    marker: {
        size: 8
    },
    name: 'Exports'
}];

const exportsLayout = {
    title: 'Agricultural Raw Materials Exports (% of Merchandise) - 2011 to 2021',
    xaxis: {
        title: 'Year',
        tickmode: 'array',
        tickvals: ['2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011'],
    },
    yaxis: {
        title: 'Percentage (%)',
        automargin: true,
    },
    font: { size: 14 },
};

const exportsConfig = { responsive: true };

// Pie chart of Agriculrural raw materials imports and exports
// Create the exports plot
Plotly.newPlot(exportsPlot, exportsData, exportsLayout, exportsConfig);

// Data for Agricultural raw materials imports (% of merchandise imports)
const importsavData = [
    1.68419811, 1.345057675, 1.521008813, 1.550367641, 1.687667119, 
    1.640667355, 1.630416528, 1.618594134, 1.523071631, 1.713652395, 1.920914828
];

// Data for Agricultural raw materials exports (% of merchandise exports)
const exportsavData = [
    4.16646491, 3.629775015, 3.851015232, 4.042967037, 4.920355154, 
    3.862982262, 3.75814698, 3.911260683, 4.809587976, 4.934896779, 7.051876039
];

// Calculate averages
const averageImports = importsavData.reduce((acc, val) => acc + val, 0) / importsavData.length;
const averageExports = exportsavData.reduce((acc, val) => acc + val, 0) / exportsavData.length;

// Create Pie Chart
const pieChartImEx = document.getElementById('pieChartImEx');

const data = [{
    values: [averageImports, averageExports],
    labels: ['Average Imports', 'Average Exports'],
    type: 'pie',
    marker: {
        colors: ['#AE1C28', '#6495ED']
    }
}];

const layout = {
    title: 'Average Agricultural Raw Materials Imports vs Exports (2011-2021)',
    font: { size: 14 },
};

const config = { responsive: true };
Plotly.newPlot(pieChartImEx, data, layout, config);
