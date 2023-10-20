var names=new Array();
names[0]="John";
names[1]="Dan";
names[2]="Roberto";
names[3]="Milton";
names[4]="johnny";
names[5]="Joshua";
names[6]="jerry";
names[7]="Philip";
names[8]="Mark";
names[9]="Julian";

for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}