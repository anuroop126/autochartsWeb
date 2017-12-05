var indiaTotalPopulation = 886692406;

var dataset = [316795697, 123835207, 157572788, 119909955, 85021861, 48018733, 30589123, 4744685];
var headings = ["TOTAL POPULATION", "ILLITERATES", "BELOW PRIMARY", "PRIMARY", "MIDDLE", "SECONDARY", "HIGHER SECONDARY", "GRADUATE", "OTHER"]

var zonesData = [
  [, , 7640609, 6669481, 6633303, 3984533, 1767999, 325371],
  [, , 41374578, 31825480, 16348595, 8403367, 5734233, 755619],
  [, , 29365665, 18048064, 16899356, 9299378, 5388712, 893395],
  [, , 30129243, 24403832, 22089112, 11353019, 8330064, 1844813],
  [, , 39677576, 30025356, 18657451, 12330887, 7793219, 742811],
  [, , 8214516, 7733990, 3314439, 1906983, 1003785, 140202],
  [, , 1170601, 1203752, 1079605, 740566, 571111, 42474]
];
var zonesTotalData = [
  [47662769, 233233971, 153880989, 164522575, 241269206, 39794232, 6328664],
  [15663982, 90559817, 54036317, 48732413, 94529073, 12306406, 967689],
  [4976876, 38103502, 19947937, 17632797, 37449064, 5172458, 552573],
  [7640609, 41374578, 29365665, 30129243, 39677576, 8214516, 1170601],
  [6669481, 31825480, 18048064, 24403832, 30025356, 7733990, 1203752],
  [6633303, 16348595, 16899356, 22089112, 18657451, 3314439, 1079605],
  [3984533, 8403367, 9299378, 11353019, 12330887, 1906983, 740566],
  [1767999, 5734233, 5388712, 8330064, 7793219, 1003785, 571111],
  [325371, 755619, 893395, 1844813, 742811, 140202, 42474]
]
var zonesStates = [
  ["JAMMU & KASHMIR", "HIMACHAL PRADESH", "PUNJAB", "HARYANA"],
  ["BIHAR", "WEST BENGAL", "JHARKHAND", "ODISHA"],
  ["RAJASTHAN", "GUJARAT", "MAHARASHTRA", "GOA"],
  ["ANDHRA PRADESH", "KARNATAKA", "KERALA", "TAMILNADU", "TELANGANA"],
  ["UTTARAKHAND", "UTTAR PRADESH", "CHHATTISGARH", "MADHYA PRADESH"],
  ["SIKKIM", "ARUNACHAL PRADESH", "NAGALAND", "MANIPUR", "MIZORAM", "TRIPURA", "MEGHALAYA", "ASSAM"],
  ["CHANDIGARH", "DELHI", "DAMAN AND DIU", "DADRA & NAGAR HAVELI", "LAKSHADWEEP", "PUDUCHERRY", "ANDAMAN & NICOBAR ISLANDS"]
]
var allData = [
  [
    [8822753, 5940056, 16864339, 16035621],
    [98552478, 70768255, 27397111, 36516127],
    [54412419, 34538246, 63985959, 944365],
    [36065455, 38183242, 27232419, 39644183, 23397276],
    [7231745, 162778694, 19583938, 51674829],
    [412574, 1021824, 1459531, 2361129, 528466, 2994168, 2564624, 28451916],
    [66077, 5103871, 127453, 214842, 64010, 475551, 276860]
  ],
  [
    [3487110, 1309180, 5372292, 5495400],
    [43288391, 23760612, 10764670, 12746144],
    [25889689, 10712386, 17288613, 145629],
    [13668748, 12041709, 3099591, 10461562, 9460803],
    [1837234, 62092962, 7745604, 22853273],
    [83016, 394909, 433922, 622281, 133704, 660339, 856566, 9121669],
    [18758, 693162, 22281, 77965, 5953, 94678, 54892]
  ],
  [
    [891698, 597483, 1664615, 1823080],
    [19460299, 9350688, 4269951, 5022564],
    [7990425, 4490111, 7412721, 54680],
    [5308273, 4336902, 2150300, 3330208, 2507114],
    [963152, 24885698, 3225293, 8374921],
    [82172, 136380, 189554, 208140, 81850, 491888, 455696, 3526778],
    [6642, 446498, 7647, 19340, 5641, 38545, 28260]
  ],
  [
    [1176404, 1044664, 2918580, 2500961],
    [14816264, 14347935, 5053533, 7156846],
    [7517220, 9667824, 12049862, 130759],
    [6169888, 8460215, 4601845, 7470404, 3426891],
    [1355631, 27221517, 3249041, 7851387],
    [100078, 166592, 311633, 395451, 124961, 776350, 533265, 5806186],
    [9816, 944003, 26258, 52239, 13391, 77549, 47345]
  ],
  [
    [1366971, 905113, 2323743, 2073654],
    [8659293, 13872724, 3565212, 5728251],
    [5800899, 3146982, 8896333, 203850],
    [4774506, 4556956, 5373133, 6693655, 3005582],
    [1207184, 20848975, 2675423, 5293774],
    [70428, 137669, 290190, 468945, 110930, 700773, 335842, 5619213],
    [9750, 987412, 30095, 21898, 13836, 86143, 54618]
  ],
  [
    [1021889, 1052768, 2522688, 2035958],
    [6207898, 4847199, 1998765, 3294733],
    [3310674, 3684358, 9709849, 194475],
    [3075664, 4688189, 6269183, 5586909, 2469167],
    [825291, 12892737, 1260458, 3678965],
    [36098, 87949, 121443, 304982, 51574, 206171, 221907, 2284315],
    [9879, 881642, 23651, 23441, 13997, 83764, 43231]
  ],
  [
    [537446, 677185, 1442005, 1327897],
    [3566411, 2448743, 1062210, 1326003],
    [2071281, 1646435, 5471767, 109895],
    [1607883, 2384924, 3099132, 2848172, 1412908],
    [585296, 8459145, 952508, 2333938],
    [21494, 58895, 61240, 199447, 15598, 88286, 93682, 1368341],
    [6408, 633578, 11183, 11741, 6642, 40808, 30206]
  ],
  [
    [285884, 309059, 509388, 663668],
    [2239524, 1892823, 583523, 1018363],
    [1605257, 938083, 2755853, 89519],
    [1235540, 1377125, 2114172, 2618641, 984586],
    [422317, 5797761, 415410, 1157731],
    [16827, 35311, 47226, 152817, 9577, 58854, 54133, 629040],
    [4506, 491109, 5090, 6507, 3491, 44608, 15800]
  ],
  [
    [55041, 44562, 111026, 114742],
    [223115, 245697, 64336, 222471],
    [226953, 251898, 398986, 15558],
    [224233, 337205, 524867, 631390, 127118],
    [35612, 518576, 60105, 128518],
    [2461, 4094, 4323, 9057, 272, 10662, 13533, 95800],
    [318, 26204, 1248, 1711, 1059, 9456, 2478]
  ]
];

var zones = ["NORTH", "EAST", "WEST", "SOUTH", "CENTRAL", "NORTH-EAST", "UT"]
//console.log();
var height = "100%",
  width = "100%";
var colours = d3.scale.category20c()
var colourValue = function(d, i) {
  return d;
};
var twoPi = Math.PI / (zonesTotalData[0].length / 2);

var formatPercent = d3.format(".0");
var curAngle = 0;
var interval = null;
var centerx = 400,
  centery = 300,
  radius = 300;
var flag = false;

var xArray = [1000, 887, 633, 430, 430, 633, 887],
  yArray = [500, 265, 208, 370, 630, 792, 735];
var canvas = d3.select("#viz")
  .append("svg")
  .attr("height", height)
  .attr("width", width)
  .attr("preserveAspectRatio", "xMinYMin meet")
.attr("viewBox", "0 0 500 500")


//  .style("background","lightgray");
var pathArc = d3.svg.arc()
  .innerRadius(10)
  .outerRadius(53)
  .startAngle(0);

var bubble, text1, text2, text3;


updateCurves(zonesTotalData[0], true)

function appendZoneCurves(index) {

  var twoPi2 = Math.PI / (zonesTotalData[index].length / 2);

  var pathArc2 = d3.svg.arc()
    .innerRadius(50)
    .outerRadius(70)
    .startAngle(0);


  var curves1 = canvas.append("g")
    .attr("id", "childArcs" + index)
    .attr("transform", "translate(" + xArray[index] + "," + yArray[index] + ")")
  curves1.selectAll("path")
    .data(zonesData[index])
    .enter().append("path")
    .each(arcFunction)
    .on("click", function(d) {
      //console.log("you clicked:" + d);
    })
    .attr("stroke", "white")
    .attr("stroke-width", 0.5)
    .on("mousemove", function(d, i) {
      var x = d3.mouse(this)[0] + 10,
        y = d3.mouse(this)[1] + 10
      bubble.style("opacity", 0.90)
        .attr("x", x + 15)
        .attr("y", y + 10)
        .attr("width", 300)
        .attr("opacity", "0.90");
      text1.style("opacity", 0.90)
        .text(headings[i])
        .attr("x", x + 15)
        .attr("y", y + 30);
      text2
        .style("opacity", 0.90)
        .text(zonesData[index][i])
        .attr("x", x + 15)
        .attr("y", y + 50);
      text3
        .style("opacity", 0.90)
        .text(function(d, i) {
          return (zonesTotalData[index][i] / 100).toFixed(2) + "%" + "(of total " + zones[index] + "-zone population)"
        })
        .attr("x", x + 15)
        .attr("y", y + 70);

    })
    .on("mouseover", function(d, i) {
      reloadAllTime()
      bubble.attr("transform", "translate(" + xArray[index] + "," + yArray[index] + ")");
      text1.attr("transform", "translate(" + xArray[index] + "," + yArray[index] + ")")
      text2.attr("transform", "translate(" + xArray[index] + "," + yArray[index] + ")")
      text3.attr("transform", "translate(" + xArray[index] + "," + yArray[index] + ")")

      var x = (zonesTotalData[index][i] / 1000000);
      d3.select(this).transition().ease("elastic").duration(1200).attr("d", pathArc.outerRadius(35 + (x) + 8).startAngle(twoPi2 * i).endAngle((twoPi2 * (i + 1))));
      d3.select(this).attr("stroke", function(d) {
        return colours(colourValue(d));
      });
    })
    .on("mouseout", function(d, i) {
      removeAll();
      var x = (zonesTotalData[index][i] / 1000000);
      d3.select(this).attr("stroke", "white")
      d3.select(this).transition().duration(1000).ease("elastic").attr("d", pathArc.outerRadius(35 + (x)).startAngle(twoPi2 * i).endAngle((twoPi2 * (i + 1))));
    })

    .style("fill", function(d, i) {
      return colours(colourValue(i));
    });
  // Function called for each path appended to increase scale and iterate
  function arcFunction(d, i) {
    var x = (zonesTotalData[index][i] / 1000000)
    d3.select(this)
      .transition()
      .ease("elastic")
      .duration(1200)
      .attr("transform", "scale(1.5)")
      .attr("d", pathArc.outerRadius(30 + (x)).startAngle(twoPi2 * i).endAngle((twoPi2 * (i + 1))));
  }

}


/* code to implement slider*/
var sliderIndex = 0;
var arcIndex = 0;
var secondFlag = false;
var slider = canvas.append("g");
var sliderWidth = 600,
  sliderHeight = 5,
  sliderX = centerx - (sliderWidth / 2),
  sliderY = 40;


slider.selectAll("text")

  .data(headings)
  .enter()
  .append("text")
  .attr("id", "slideText")
  .attr("x", function(d, i) {
    // //console.log(sliderX + ((i) * (sliderWidth / (headings.length - 1))));
    return sliderX + ((i) * (sliderWidth / (headings.length - 1)))
  })
  .attr("y", sliderY - 20)
  .attr("text-anchor", "middle")
  .text(function(d) {
    return d;
  })
  .attr("font-size", 9)
  .on("mouseover", function() {
    d3.select(this).transition().duration(800).attr("font-size", 15)
  })
  .on("mouseout", function() {
    d3.select(this).transition().duration(800).attr("font-size", 10)
  })
  .on("click", function(d, i) {
    sliderIndex = i;
    educationProfileHeading.text(d)
    slidingPin.transition()
      .duration(function() {
        return 1200;
      })
      .attr("cx", d3.select(this).attr("x"));
    if (i == 0) {
      secondFlag = true;
      updateCurves(zonesTotalData[i], true)
    } else {
      secondFlag = false;
      updateCurves(zonesTotalData[i], false)
    }
  });
slider.append("rect")
  .attr("x", sliderX)
  .attr("rx", 4)
  .attr("y", sliderY)
  .attr("height", sliderHeight)
  .attr("width", sliderWidth)
  .attr("fill", "skyblue");
slider.selectAll("circleNodes")
  .data(headings)
  .enter()
  .append("circle")
  .attr("id", "circleNodes")
  .attr("cx", function(d, i) {
    // //console.log(sliderX + ((i) * (sliderWidth / (headings.length - 1))));
    return sliderX + ((i) * (sliderWidth / (headings.length - 1)))
  })
  .attr("cy", sliderY + 2)
  .attr("r", 4)
  .attr("fill", "white")
  .attr("stroke", "skyblue")
  .attr("stroke-width", 3)
  .on("click", function(d, i) {
    sliderIndex = i;
    educationProfileHeading.text(d)
    slidingPin.transition()
      .duration(function() {
        return 1200;
      })
      .attr("cx", d3.select(this).attr("cx"));
    if (i == 0) {
      secondFlag = true;
      updateCurves(zonesTotalData[i], true)
    } else {
      secondFlag = false;
      updateCurves(zonesTotalData[i], false)
    }
  });
var slidingPin = slider.append("circle")
  .attr("id", "draggable")
  .attr("cx", 100)
  .attr("cy", sliderY + 2)
  .attr("r", 10)
  .attr("fill", "white")
  .attr("opacity", 0.5)
  .attr("stroke", "teal")
  .attr("stroke-width", 10)
  .classed('draggable', true);




var drag = d3.behavior.drag()
  .on("dragstart", dragstarted)
  .on("drag", dragged)
  .on("dragend", dragended);

//Called when drag event starts. It stop the propagation of the click event
function dragstarted() {
  d3.event.sourceEvent.stopPropagation();
}

//Called when the drag event occurs (object should be moved)
function dragged() {
  var x = d3.mouse(this)[0];
  var y = d3.mouse(this)[1];
  //Translate the object on the actual moved point
  d3.select(this).attr("cx", x);
  if (x > 1200) {
    d3.select(this).transition().duration(1000).ease("elastic").attr("cx", 1180)
  }
  if (x < 200) {
    d3.select(this).transition().duration(1000).ease("elastic").attr("cx", 220)
  }


}

function dragended() {
  var x = 0;
  for (i = 0; i < headings.length; i++) {
    x = sliderX + ((i) * (sliderWidth / (headings.length - 1)));
    var centerx = d3.select(this).attr("cx");
    //console.log(centerx);
    if (centerx > x - 37.5 && centerx < x + 37.5) {
      d3.select(this).transition().duration(1000).ease("elastic").attr("cx", x)

      //console.log(zonesTotalData[i])
      if (i == 0) {
        secondFlag = true;
        updateCurves(zonesTotalData[i], true);
      } else {
        secondFlag = false;
        updateCurves(zonesTotalData[i], false);
      }
      break;
    }
  }
}
var nodes = canvas.selectAll(".draggable").call(drag);

function updateCurves(data, flag) {
  twoPi = Math.PI / (data.length / 2);
  canvas.selectAll("#arcs").remove();
  canvas.append("g")
    .attr("id", "arcs")
    .attr("transform", "translate(" + (centerx - (centerx / 2)) + "," + centery + ")")
    .selectAll("path")
    .data(data)
    .enter().append("path")
    .each(arcFunction)
    .on("click", function(d) {
      //console.log("you clicked:" + d);
    })
    .attr("stroke", "white")
    .attr("stroke-width", 0.5)
    .on("mousemove", function(d, i) {
      var bar;
      if (flag == true) {
        bar = 100 * d / indiaTotalPopulation
      } else {
        bar = 100 * d / zonesTotalData[0][i]
      }
      var x = d3.mouse(this)[0] + 10,
        y = d3.mouse(this)[1] + 10
      bubble.style("opacity", 0.90)
        .attr("x", x + 15)
        .attr("y", y + 10)
        .attr("opacity", "0.90")
        .attr("transform", "translate(" + (centerx - (centerx / 2)) + "," + centery + ")");
      text1.style("opacity", 0.90)
        .text(zones[i])
        .attr("x", x + 15)
        .attr("y", y + 30)

        .attr("font-size", 15)
        .attr("transform", "translate(" + (centerx - (centerx / 2)) + "," + centery + ")");
      text2
        .style("opacity", 0.90)
        .text(d)
        .attr("x", x + 15)
        .attr("y", y + 50)
        .attr("transform", "translate(" + (centerx - (centerx / 2)) + "," + centery + ")");
      text3
        .style("opacity", 0.90)
        .text(bar.toFixed(1) + "%")
        .attr("x", x + 15)
        .attr("y", y + 70)
        .attr("transform", "translate(" + (centerx - (centerx / 2)) + "," + centery + ")");

    })

    .on("mouseover", function(d, i) {
      zoneHeading.text(educationProfileHeading.text() + " -> " + zones[i]);
      reloadAllTime()
      arcIndex = i;
      if (flag == true)
        updateSecondCurves(true);
      else updateSecondCurves(false);
      var bar;
      if (flag == true) {
        bar = 100 * d / indiaTotalPopulation
      } else {
        bar = 100 * d / zonesTotalData[0][i]
      }
      d3.select(this).transition().ease("elastic").duration(1200).attr("d", pathArc.outerRadius(30 + (bar) + 8).startAngle(twoPi * i).endAngle((twoPi * (i + 1))));
      d3.select(this).attr("stroke", function(d) {
        return "white";
      });
    })
    .on("mouseout", function(d, i) {
      removeAll();
      var bar;
      if (flag == true) {
        bar = 100 * d / indiaTotalPopulation
      } else {
        bar = 100 * d / zonesTotalData[0][i]
      }
      d3.select(this).attr("stroke", "white")
      d3.select(this).transition().duration(1000).ease("elastic").attr("d", pathArc.outerRadius(30 + (bar)).startAngle(twoPi * i).endAngle((twoPi * (i + 1))));
    })

    .style("fill", function(d, i) {
      return colours(colourValue(i));
    });

  function arcFunction(d, i) {
    var bar;
    if (flag == true) {
      bar = 100 * d / indiaTotalPopulation
    } else {
      bar = 100 * d / zonesTotalData[0][i]
    }
    d3.select(this)
      .transition()
      .ease("elastic")
      .duration(1200)
      .attr("transform", "scale(2)")
      .attr("d", pathArc.outerRadius(30 + (bar)).startAngle(twoPi * i).endAngle((twoPi * (i + 1))));
  }

}

function updateSecondCurves(secondFlag) {
  //console.log("second flag : " + secondFlag);
  //console.log("arcIndex : " + arcIndex);
  //console.log("sliderIndex : " + sliderIndex);
  var data = allData[sliderIndex][arcIndex];

  //console.log("updateecondcurve");
  var twoPi = Math.PI / (data.length / 2);
  canvas.selectAll("#secondarc").remove();
  canvas.append("g")
    .attr("id", "secondarc")
    .attr("transform", "translate(" + (centerx + (centerx / 2)) + "," + centery + ")")
    .selectAll("path")
    .data(data)
    .enter().append("path")
    .each(arcFunction)
    .on("click", function(d) {
      //console.log("you clicked:" + d);
    })
    .attr("stroke", "white")
    .attr("stroke-width", 0.5)
    .on("mousemove", function(d, i) {
      var bar;
      if (secondFlag == true) {
        bar = 100 * d / zonesTotalData[0][arcIndex]
      } else {
        bar = 100 * d / allData[0][arcIndex][i]
      }
      var x = d3.mouse(this)[0] + 10,
        y = d3.mouse(this)[1] + 10
      bubble.style("opacity", 0.90)
        .attr("x", x + 15)
        .attr("y", y + 10)
        .attr("opacity", "0.90")
        .attr("transform", "translate(" + (centerx + (centerx / 2)) + "," + centery + ")");
      text1.style("opacity", 0.90)
        .text(zonesStates[arcIndex][i])
        .attr("x", x + 15)
        .attr("y", y + 30)
        .attr("transform", "translate(" + (centerx + (centerx / 2)) + "," + centery + ")");
      text2
        .style("opacity", 0.90)
        .text(d)
        .attr("x", x + 15)
        .attr("y", y + 50)
        .attr("transform", "translate(" + (centerx + (centerx / 2)) + "," + centery + ")");
      text3
        .style("opacity", 0.90)
        .text(bar.toFixed(1) + "%")
        .attr("x", x + 15)
        .attr("y", y + 70)
        .attr("transform", "translate(" + (centerx + (centerx / 2)) + "," + centery + ")");

    })

    .on("mouseover", function(d, i) {
      reloadAllTime()
      var bar;
      if (secondFlag == true) {
        bar = 100 * d / zonesTotalData[0][arcIndex]
      } else {
        bar = 100 * d / allData[0][arcIndex][i]
      }
      d3.select(this).transition().ease("elastic").duration(1200).attr("d", pathArc.outerRadius(30 + (bar) - 7).startAngle(twoPi * i).endAngle((twoPi * (i + 1))));
      d3.select(this).attr("stroke", function(d) {
        return "white";
      });
    })
    .on("mouseout", function(d, i) {
      removeAll();
      var bar;
      if (secondFlag == true) {
        bar = 100 * d / zonesTotalData[0][arcIndex]
      } else {
        bar = 100 * d / allData[0][arcIndex][i]
      }
      d3.select(this).attr("stroke", "white")
      d3.select(this).transition().duration(1000).ease("elastic").attr("d", pathArc.outerRadius(30 + (bar) - 15).startAngle(twoPi * i).endAngle((twoPi * (i + 1))));
    })

    .style("fill", function(d, i) {
      return colours(colourValue(i));
    });

  function arcFunction(d, i) {
    var bar;
    if (secondFlag == true) {
      //console.log("state population");
      bar = 100 * d / zonesTotalData[0][arcIndex]
    } else {
      bar = 100 * d / allData[0][arcIndex][i]
    }
    d3.select(this)
      .transition()
      .ease("elastic")
      .duration(1200)
      .attr("transform", "scale(2)")
      .attr("d", pathArc.outerRadius(30 + (bar) - 15).startAngle(twoPi * i).endAngle((twoPi * (i + 1))));
  }

}

var educationProfileHeading = canvas.append("text")
  .attr("id", "mainHeadings")
  .attr("x", centerx - (centerx / 3))
  .attr("y", centery - 200)
  .attr("text-anchor", "middle")
  .text("TOTAL POPULATION");

var zoneHeading = canvas.append("text")
  .attr("id", "mainHeadings")
  .attr("x", centerx + (centerx / 3))
  .attr("y", centery - 200)
  .attr("text-anchor", "middle");



function removeAll() {
  canvas.selectAll("#bubble").remove();
  canvas.selectAll("#textersB").remove();
}

function reloadAllTime() {
  // canvas.selectAll("#bubble").remove();
  // canvas.selectAll("#textersB").remove();
  bubble = canvas.append("rect")
    .style("opacity", 0)
    .attr("id", "bubble")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", 150)
    .attr("height", 70)
    .attr("rx", 10)
    .attr("ry", 10)

    .style("fill", "#F7F241");
  text1 = canvas.append("text")
    .style("opacity", 0)
    .attr("id", "textersB")
    .attr("x", 0)
    .attr("y", 0)
    .attr("font-size", 10)
    .attr("fill", "#777772");
  text2 = canvas.append("text")
    .style("opacity", 0)
    .attr("id", "textersB")
    .attr("x", 0)
    .attr("y", 0)
    .attr("font-size", 15)
    .attr("fill", "#777772");
  text3 = canvas.append("text")
    .style("opacity", 0)
    .attr("id", "textersB")
    .attr("x", 0)
    .attr("y", 0)
    .attr("font-size", 15)
    .attr("fill", "#777772");
}
