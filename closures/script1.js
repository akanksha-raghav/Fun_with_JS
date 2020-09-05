function ems(pixels){
	var base = 16;
	function doThe(){
		return pixels/base;
	}
	return doThe;
}
var small = ems(12);
var medium = ems(18);
var large = ems(24);
var xlarge = ems(32);
console.log("Small size ",small() );
console.log("Medium size ",medium() );
console.log("Large size ",large() );
console.log("Extra Large size ",xlarge() );