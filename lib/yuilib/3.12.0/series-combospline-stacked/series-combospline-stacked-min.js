/*
YUI 3.12.0 (build 8655935)
Copyright 2013 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

YUI.add("series-combospline-stacked",function(e,t){e.StackedComboSplineSeries=e.Base.create("stackedComboSplineSeries",e.StackedComboSeries,[e.CurveUtil],{drawSeries:function(){this.get("showAreaFill")&&this.drawStackedAreaSpline(),this.get("showLines")&&this.drawSpline(),this.get("showMarkers")&&this.drawPlots()}},{ATTRS:{type:{value:"stackedComboSpline"},showAreaFill:{value:!0}}})},"3.12.0",{requires:["series-combo-stacked","series-curve-util"]});