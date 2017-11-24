// var _WIDTH = document.getElementById("bar-chart").clientWidth
// var _HEIGHT = document.getElementById("bar-chart").clientHeight
//
// var _RECT_CANVAS = d3.select("#bar-chart").append("svg")
// .attr("width", '100%')
// .attr("height", '100%')
// .attr('viewBox','0 0 '+Math.min(_WIDTH,_HEIGHT) +' '+Math.min(_WIDTH,_HEIGHT) )
// .attr('preserveAspectRatio','xMinYMin')
//
// _MAKE_BAR_CHART([10,20,30,40,50,60,80])
// function _MAKE_BAR_CHART(data){
//   // _RECT_CANVAS.attr("viewBox", "0 0 "+_WIDTH+" "+_HEIGHT)
//   // .attr("preserveAspectRatio", "xMinYMin  meet")
//   _WIDTH = document.getElementById("bar-chart").clientWidth
//   _HEIGHT = document.getElementById("bar-chart").clientHeight
//   var _bar_scale = d3.scaleLinear()
//                       .range([0,_HEIGHT - 10])
//   var _bar_width = 25;
//   _bar_scale.domain([0,d3.max(data)])
//   _RECT_CANVAS.selectAll("rect")
//               .data(data)
//               .enter()
//               .append("rect")
//               .attr("x",function(d,i){
//                 return i*(_bar_width + 28) + 5
//               })
//               .attr("y",function(d){
//                 return  _HEIGHT - _bar_scale(d)
//               })
//               .attr("width",_bar_width)
//               .attr("height",function(d){
//                 return  _bar_scale(d)
//               })
//
// }




$(function() {
  var $container = $('.top_band_squares'),
    pi = 2 * Math.PI,
    width = $container.width(),
    height = $container.height(),
    outerRadius = Math.min(width, height) / 2 - 10,
    innerRadius = (outerRadius / 7) * 4,
    fontSize = (Math.min(width, height) / 4);

  var arc = d3.svg.arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius)
    .startAngle(0);

  var svg = d3.select('#pie-chart').append("svg")
    .attr("width", '100%')
    .attr("height", '100%')
    .attr('viewBox', '0 0 ' + Math.min(width, height) + ' ' + Math.min(width, height))
    .attr('preserveAspectRatio', 'xMinYMin')
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  var text = svg.append("text")
    .text('0%')
    .attr("text-anchor", "middle")
    .style("font-size", fontSize + 'px')
    .attr("dy", fontSize / 3)
    .attr("dx", 2);

  var background = svg.append("path")
    .datum({
      endAngle: pi
    })
    .style("fill", "none")
    .attr("d", arc);

  var foreground = svg.append("path")
    .datum({
      endAngle: 0 * pi
    })
    .style("fill", "none")
    .attr("stroke", "white")
    .attr("stroke-width", "5px")
    .attr("rx", "20px")
    .attr("ry", "20px")
    .attr("d", arc);

// $("#pie-chart").hover(
//   function(){foreground.transition()
//     .duration(750)
//     .call(arcTween, Math.random() * pi);}
// );
  setInterval(function() {
    foreground.transition()
      .duration(750)
      .call(arcTween, Math.random() * pi);
  }, 3000);
  // $("#bar-chart").hover(
  //   function(){var sample_data = []
  //   for (var i = 0; i < 6; i++) {
  //     sample_data.push(Math.floor(Math.random() * (80 - 10 + 1) + 10))
  //   }
  //   updateBar(sample_data)}
  // );

  setInterval(function() {
    var sample_data = []
    for (var i = 0; i < 6; i++) {
      sample_data.push(Math.floor(Math.random() * (80 - 10 + 1) + 10))
    }
    updateBar(sample_data)
  }, 3000);

  function arcTween(transition, newAngle) {

    transition.attrTween("d", function(d) {

      var interpolate = d3.interpolate(d.endAngle, newAngle);

      return function(t) {
        d.endAngle = interpolate(t);
        text.text(Math.round((d.endAngle / pi) * 100) + '%');
        return arc(d);
      };
    });
  }
  svg = d3.select('#bar-chart').append("svg")
    .attr("width", '100%')
    .attr("height", '100%')
    .attr('viewBox', '0 0 ' + Math.min(width, height) + ' ' + Math.min(width, height))
    .attr('preserveAspectRatio', 'xMinYMin')
    .append("g")
  var _bar_scale = d3.scale.linear()
    .range([0, height - 10])
  var _bar_width = 25;

  function updateBar(data) {
    _bar_scale.domain([0, d3.max(data)])
    var bars = svg.selectAll(".bar").data(data)
    bars.enter().append("rect")
      .attr("class", "bar")

    bars.attr("x", function(d, i) {
        return i * (_bar_width + 28) + 5;
      })
      .attr("width", _bar_width)
      .transition().duration(1000).attr("y", function(d) {
        return _bar_scale(d);
      })
      .attr("height", function(d) {
        return height - _bar_scale(d);
      });
  }

  //code for area chart starts here!

  var area_svg = d3.select("#area-chart").append("svg")
  .attr("width", width)
  .attr("height", height)
.append("g");
var area_data= [{
      x: 0,
      y: 35,
    },
    {
      x: 1,
      y: 40,
    },
    {
      x: 2,
      y: 25,
    },
    {
      x: 3,
      y: 20,
    },
    {
          x: 4,
          y: 35,
        },
        {
          x: 5,
          y: 40,
        },
        {
          x: 6,
          y: 25,
        },
  ];
  make_area_graph(area_data, width, height,area_svg,true);

  setInterval(function() {
    var sample_data = []
    for (var i = 0; i < 7; i++) {
      var x={}
      x['x'] = i;
      x['y'] = Math.floor(Math.random() * (40 - 10 + 1) + 1)
      sample_data.push(x)
    }
    make_area_graph(sample_data, width, height,area_svg,false);
  }, 3000);

  //code for scatterplot starts here!
  var scp_svg = d3.select("#scatter-plot").append("svg")
                  .attr("width",width)
                  .attr("height",height)
  var x_data=[10,20,40,60]
  var y_data=[10,20,40,60]
  make_scatter_plot(scp_svg,x_data,y_data,width,height,true)
  setInterval(function() {
    var sample_data_x = []
    var sample_data_y = []
    for (var i = 0; i < Math.floor(Math.random() * (30 + 1) + 15); i++) {
      sample_data_x.push(Math.floor(Math.random() * (80 - 10 + 1) + 5))
      sample_data_y.push(Math.floor(Math.random() * (80 - 10 + 1) + 5))
    }
    make_scatter_plot(scp_svg,sample_data_x,sample_data_y,width,height,true)
  }, 3000);
});

function make_area_graph(data,width, height, svg, initial) {
  var x = d3.scale.linear()
    .domain([0, d3.max(data, function(d) {
      return d.x;
    })])
    .range([0, width]);

  var y = d3.scale.linear()
    .domain([0, d3.max(data, function(d) {
      return d.y;
    })])
    .range([height, 0]);
  var area = d3.svg.area()
    .x(function(d) {
      return x(d.x);
    })
    .y0(height)
    .y1(function(d) {
      return y(d.y);
    });
    // .attr("transform", "translate(" + (width) + "," + margin.top + ")");
if(initial){
svg.append("path")
    .datum(data)
    .attr("class", "area")
    .attr("d", area)
    .attr("opacity","0,5")
    // .attr("fill","none")
    // .attr("stroke","white")
    // .attr("stroke-width","2px")
  }else{
    svg.selectAll("path")
    .datum(data)
    .transition()
    .duration(2500)
    .attr("d", area);}
}

function make_scatter_plot(scp_svg,x_data,y_data,width,height,initial){
  var x = d3.scale.linear()
    .domain([0, d3.max(x_data)])
    .range([0, width-10]);

  var y = d3.scale.linear()
    .domain([0, d3.max(y_data)])
    .range([height-10, 0]);

  var temp = scp_svg
  .selectAll("circle")
  .data(x_data);
  temp.exit().remove();
  temp.enter()
  .append("circle")
  // .attr("fill","green")
  temp.attr("r",0)
  .transition()
  .duration(1000)
  .attr("r",8)
  .attr("cx",function(d){return x(d);})
  .attr("cy",function(d,i){return y(y_data[i]);})
  ;

}
// mongod --dbpath=C:/Program Files/MongoDB/Server/3.4/bin
