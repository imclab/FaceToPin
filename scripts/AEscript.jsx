{  //start script
	app.beginUndoGroup("foo");

	// create project if necessary
	var proj = app.project;
	if(!proj) proj = app.newProject();

	// create new comp named 'my comp'
	var compW = 1920; // comp width
	var compH = 1080; // comp height
	var compL = 10;  // comp length (seconds)
	var compRate = 24; // comp frame rate
	var compBG = [0/255,0/255,0/255] // comp background color
	var myItemCollection = app.project.items;
	var myComp = myItemCollection.addComp('my comp',compW,compH,1,compL,compRate);
	myComp.bgColor = compBG;

	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");

		p.setValueAtTime(0.0, [ 300.0, 540.0]);
		p.setValueAtTime(0.25, [ 300.0, 452.8026]);
		p.setValueAtTime(0.5, [ 300.0, 452.82468]);
		p.setValueAtTime(0.75, [ 300.0, 453.16904]);
		p.setValueAtTime(1.0, [ 300.0, 458.35422]);
		p.setValueAtTime(1.25, [ 300.0, 459.55905]);
		p.setValueAtTime(1.5, [ 300.0, 455.7762]);
		p.setValueAtTime(1.75, [ 300.0, 453.5218]);
		p.setValueAtTime(2.0, [ 300.0, 456.83627]);
		p.setValueAtTime(2.25, [ 300.0, 452.95822]);
		p.setValueAtTime(2.5, [ 300.0, 452.2945]);
		p.setValueAtTime(2.75, [ 300.0, 448.01474]);
		p.setValueAtTime(3.0, [ 300.0, 453.30075]);
		p.setValueAtTime(3.25, [ 300.0, 450.98434]);
		p.setValueAtTime(3.5, [ 300.0, 443.2293]);
		p.setValueAtTime(3.75, [ 300.0, 449.9194]);
		p.setValueAtTime(4.0, [ 300.0, 464.8138]);
		p.setValueAtTime(4.25, [ 300.0, 458.9821]);
		p.setValueAtTime(4.5, [ 300.0, 441.5869]);
		p.setValueAtTime(4.75, [ 300.0, 441.76294]);
		p.setValueAtTime(5.0, [ 300.0, 448.25876]);
		p.setValueAtTime(5.25, [ 300.0, 454.4833]);
		p.setValueAtTime(5.5, [ 300.0, 443.4327]);
		p.setValueAtTime(5.75, [ 300.0, 447.85318]);
		p.setValueAtTime(6.0, [ 300.0, 452.52466]);
		p.setValueAtTime(6.25, [ 300.0, 447.22604]);
		p.setValueAtTime(6.5, [ 300.0, 440.63312]);
		p.setValueAtTime(6.75, [ 300.0, 443.78326]);
		p.setValueAtTime(7.0, [ 300.0, 451.76266]);
		p.setValueAtTime(7.25, [ 300.0, 445.6711]);
		p.setValueAtTime(7.5, [ 300.0, 445.30746]);
		p.setValueAtTime(7.75, [ 300.0, 445.30746]);
		p.setValueAtTime(8.0, [ 300.0, 445.30746]);
		p.setValueAtTime(8.25, [ 300.0, 445.30746]);
		p.setValueAtTime(8.5, [ 300.0, 445.30746]);
		p.setValueAtTime(8.75, [ 300.0, 445.30746]);
		p.setValueAtTime(9.0, [ 300.0, 445.30746]);
		p.setValueAtTime(9.25, [ 300.0, 445.2462]);
		p.setValueAtTime(9.5, [ 300.0, 444.14355]);
		p.setValueAtTime(9.75, [ 300.0, 444.0823]);
		p.setValueAtTime(9.958333, [ 300.0, 444.0823]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");

		p.setValueAtTime(0.0, [ 330.0, 540.0]);
		p.setValueAtTime(0.25, [ 330.0, 452.8046]);
		p.setValueAtTime(0.5, [ 330.0, 452.8561]);
		p.setValueAtTime(0.75, [ 330.0, 453.16788]);
		p.setValueAtTime(1.0, [ 330.0, 458.69443]);
		p.setValueAtTime(1.25, [ 330.0, 459.9583]);
		p.setValueAtTime(1.5, [ 330.0, 455.8256]);
		p.setValueAtTime(1.75, [ 330.0, 453.41333]);
		p.setValueAtTime(2.0, [ 330.0, 456.9645]);
		p.setValueAtTime(2.25, [ 330.0, 452.541]);
		p.setValueAtTime(2.5, [ 330.0, 452.2063]);
		p.setValueAtTime(2.75, [ 330.0, 448.45605]);
		p.setValueAtTime(3.0, [ 330.0, 453.13425]);
		p.setValueAtTime(3.25, [ 330.0, 450.67618]);
		p.setValueAtTime(3.5, [ 330.0, 443.16757]);
		p.setValueAtTime(3.75, [ 330.0, 449.1564]);
		p.setValueAtTime(4.0, [ 330.0, 462.77344]);
		p.setValueAtTime(4.25, [ 330.0, 456.71542]);
		p.setValueAtTime(4.5, [ 330.0, 441.1815]);
		p.setValueAtTime(4.75, [ 330.0, 441.80746]);
		p.setValueAtTime(5.0, [ 330.0, 447.88776]);
		p.setValueAtTime(5.25, [ 330.0, 453.81232]);
		p.setValueAtTime(5.5, [ 330.0, 443.24405]);
		p.setValueAtTime(5.75, [ 330.0, 446.94992]);
		p.setValueAtTime(6.0, [ 330.0, 451.69968]);
		p.setValueAtTime(6.25, [ 330.0, 446.0524]);
		p.setValueAtTime(6.5, [ 330.0, 440.35275]);
		p.setValueAtTime(6.75, [ 330.0, 443.4168]);
		p.setValueAtTime(7.0, [ 330.0, 450.2335]);
		p.setValueAtTime(7.25, [ 330.0, 444.77524]);
		p.setValueAtTime(7.5, [ 330.0, 444.4505]);
		p.setValueAtTime(7.75, [ 330.0, 444.4505]);
		p.setValueAtTime(8.0, [ 330.0, 444.4505]);
		p.setValueAtTime(8.25, [ 330.0, 444.4505]);
		p.setValueAtTime(8.5, [ 330.0, 444.4505]);
		p.setValueAtTime(8.75, [ 330.0, 444.4505]);
		p.setValueAtTime(9.0, [ 330.0, 444.4505]);
		p.setValueAtTime(9.25, [ 330.0, 444.3881]);
		p.setValueAtTime(9.5, [ 330.0, 443.26486]);
		p.setValueAtTime(9.75, [ 330.0, 443.20248]);
		p.setValueAtTime(9.958333, [ 330.0, 443.20248]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");

		p.setValueAtTime(0.0, [ 600.0, 540.0]);
		p.setValueAtTime(0.25, [ 600.0, 340.22162]);
		p.setValueAtTime(0.5, [ 600.0, 341.01456]);
		p.setValueAtTime(0.75, [ 600.0, 340.93488]);
		p.setValueAtTime(1.0, [ 600.0, 340.1142]);
		p.setValueAtTime(1.25, [ 600.0, 329.21783]);
		p.setValueAtTime(1.5, [ 600.0, 333.24097]);
		p.setValueAtTime(1.75, [ 600.0, 336.00214]);
		p.setValueAtTime(2.0, [ 600.0, 341.42242]);
		p.setValueAtTime(2.25, [ 600.0, 339.7679]);
		p.setValueAtTime(2.5, [ 600.0, 338.21863]);
		p.setValueAtTime(2.75, [ 600.0, 343.11655]);
		p.setValueAtTime(3.0, [ 600.0, 343.701]);
		p.setValueAtTime(3.25, [ 600.0, 338.84592]);
		p.setValueAtTime(3.5, [ 600.0, 341.53116]);
		p.setValueAtTime(3.75, [ 600.0, 327.56308]);
		p.setValueAtTime(4.0, [ 600.0, 307.95837]);
		p.setValueAtTime(4.25, [ 600.0, 318.13763]);
		p.setValueAtTime(4.5, [ 600.0, 343.50748]);
		p.setValueAtTime(4.75, [ 600.0, 346.6385]);
		p.setValueAtTime(5.0, [ 600.0, 347.3558]);
		p.setValueAtTime(5.25, [ 600.0, 340.2891]);
		p.setValueAtTime(5.5, [ 600.0, 345.11453]);
		p.setValueAtTime(5.75, [ 600.0, 334.2983]);
		p.setValueAtTime(6.0, [ 600.0, 330.8264]);
		p.setValueAtTime(6.25, [ 600.0, 337.33188]);
		p.setValueAtTime(6.5, [ 600.0, 346.7878]);
		p.setValueAtTime(6.75, [ 600.0, 344.87222]);
		p.setValueAtTime(7.0, [ 600.0, 331.8771]);
		p.setValueAtTime(7.25, [ 600.0, 340.85165]);
		p.setValueAtTime(7.5, [ 600.0, 341.3917]);
		p.setValueAtTime(7.75, [ 600.0, 341.3917]);
		p.setValueAtTime(8.0, [ 600.0, 341.3917]);
		p.setValueAtTime(8.25, [ 600.0, 341.3917]);
		p.setValueAtTime(8.5, [ 600.0, 341.3917]);
		p.setValueAtTime(8.75, [ 600.0, 341.3917]);
		p.setValueAtTime(9.0, [ 600.0, 341.3917]);
		p.setValueAtTime(9.25, [ 600.0, 341.5581]);
		p.setValueAtTime(9.5, [ 600.0, 344.5535]);
		p.setValueAtTime(9.75, [ 600.0, 344.7199]);
		p.setValueAtTime(9.958333, [ 600.0, 344.7199]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");

		p.setValueAtTime(0.0, [ 630.0, 540.0]);
		p.setValueAtTime(0.25, [ 630.0, 338.23013]);
		p.setValueAtTime(0.5, [ 630.0, 339.25046]);
		p.setValueAtTime(0.75, [ 630.0, 339.10233]);
		p.setValueAtTime(1.0, [ 630.0, 336.32394]);
		p.setValueAtTime(1.25, [ 630.0, 326.64963]);
		p.setValueAtTime(1.5, [ 630.0, 330.5853]);
		p.setValueAtTime(1.75, [ 630.0, 332.99008]);
		p.setValueAtTime(2.0, [ 630.0, 337.12558]);
		p.setValueAtTime(2.25, [ 630.0, 336.79932]);
		p.setValueAtTime(2.5, [ 630.0, 336.83856]);
		p.setValueAtTime(2.75, [ 630.0, 340.195]);
		p.setValueAtTime(3.0, [ 630.0, 339.9675]);
		p.setValueAtTime(3.25, [ 630.0, 336.01273]);
		p.setValueAtTime(3.5, [ 630.0, 339.36087]);
		p.setValueAtTime(3.75, [ 630.0, 324.75278]);
		p.setValueAtTime(4.0, [ 630.0, 305.4996]);
		p.setValueAtTime(4.25, [ 630.0, 315.70737]);
		p.setValueAtTime(4.5, [ 630.0, 341.34702]);
		p.setValueAtTime(4.75, [ 630.0, 344.8154]);
		p.setValueAtTime(5.0, [ 630.0, 344.18637]);
		p.setValueAtTime(5.25, [ 630.0, 337.55618]);
		p.setValueAtTime(5.5, [ 630.0, 343.01114]);
		p.setValueAtTime(5.75, [ 630.0, 330.34503]);
		p.setValueAtTime(6.0, [ 630.0, 327.90854]);
		p.setValueAtTime(6.25, [ 630.0, 334.7019]);
		p.setValueAtTime(6.5, [ 630.0, 344.61554]);
		p.setValueAtTime(6.75, [ 630.0, 342.46332]);
		p.setValueAtTime(7.0, [ 630.0, 328.14767]);
		p.setValueAtTime(7.25, [ 630.0, 337.5795]);
		p.setValueAtTime(7.5, [ 630.0, 338.1491]);
		p.setValueAtTime(7.75, [ 630.0, 338.1491]);
		p.setValueAtTime(8.0, [ 630.0, 338.1491]);
		p.setValueAtTime(8.25, [ 630.0, 338.1491]);
		p.setValueAtTime(8.5, [ 630.0, 338.1491]);
		p.setValueAtTime(8.75, [ 630.0, 338.1491]);
		p.setValueAtTime(9.0, [ 630.0, 338.1491]);
		p.setValueAtTime(9.25, [ 630.0, 338.3154]);
		p.setValueAtTime(9.5, [ 630.0, 341.3082]);
		p.setValueAtTime(9.75, [ 630.0, 341.47446]);
		p.setValueAtTime(9.958333, [ 630.0, 341.47446]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");

		p.setValueAtTime(0.0, [ 540.0, 0.0]);
		p.setValueAtTime(0.25, [ 540.0, 672.0614]);
		p.setValueAtTime(0.5, [ 540.0, 675.2341]);
		p.setValueAtTime(0.75, [ 540.0, 683.44025]);
		p.setValueAtTime(1.0, [ 540.0, 755.4625]);
		p.setValueAtTime(1.25, [ 540.0, 733.1964]);
		p.setValueAtTime(1.5, [ 540.0, 693.35754]);
		p.setValueAtTime(1.75, [ 540.0, 696.87006]);
		p.setValueAtTime(2.0, [ 540.0, 769.3352]);
		p.setValueAtTime(2.25, [ 540.0, 740.62616]);
		p.setValueAtTime(2.5, [ 540.0, 683.9835]);
		p.setValueAtTime(2.75, [ 540.0, 699.6466]);
		p.setValueAtTime(3.0, [ 540.0, 770.8419]);
		p.setValueAtTime(3.25, [ 540.0, 762.76117]);
		p.setValueAtTime(3.5, [ 540.0, 702.25433]);
		p.setValueAtTime(3.75, [ 540.0, 775.6356]);
		p.setValueAtTime(4.0, [ 540.0, 789.1868]);
		p.setValueAtTime(4.25, [ 540.0, 698.0844]);
		p.setValueAtTime(4.5, [ 540.0, 678.01917]);
		p.setValueAtTime(4.75, [ 540.0, 684.279]);
		p.setValueAtTime(5.0, [ 540.0, 771.6089]);
		p.setValueAtTime(5.25, [ 540.0, 789.47485]);
		p.setValueAtTime(5.5, [ 540.0, 701.05176]);
		p.setValueAtTime(5.75, [ 540.0, 758.8637]);
		p.setValueAtTime(6.0, [ 540.0, 780.256]);
		p.setValueAtTime(6.25, [ 540.0, 727.1841]);
		p.setValueAtTime(6.5, [ 540.0, 694.5858]);
		p.setValueAtTime(6.75, [ 540.0, 713.95123]);
		p.setValueAtTime(7.0, [ 540.0, 763.15173]);
		p.setValueAtTime(7.25, [ 540.0, 708.689]);
		p.setValueAtTime(7.5, [ 540.0, 705.50476]);
		p.setValueAtTime(7.75, [ 540.0, 705.50476]);
		p.setValueAtTime(8.0, [ 540.0, 705.50476]);
		p.setValueAtTime(8.25, [ 540.0, 705.50476]);
		p.setValueAtTime(8.5, [ 540.0, 705.50476]);
		p.setValueAtTime(8.75, [ 540.0, 705.50476]);
		p.setValueAtTime(9.0, [ 540.0, 705.50476]);
		p.setValueAtTime(9.25, [ 540.0, 707.01996]);
		p.setValueAtTime(9.5, [ 540.0, 734.29456]);
		p.setValueAtTime(9.75, [ 540.0, 735.8098]);
		p.setValueAtTime(9.958333, [ 540.0, 735.8098]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");

		p.setValueAtTime(0.0, [ 540.0, 540.0]);
		p.setValueAtTime(0.25, [ 540.0, 141.81898]);
		p.setValueAtTime(0.5, [ 540.0, 141.2083]);
		p.setValueAtTime(0.75, [ 540.0, 142.16374]);
		p.setValueAtTime(1.0, [ 540.0, 155.86058]);
		p.setValueAtTime(1.25, [ 540.0, 149.49103]);
		p.setValueAtTime(1.5, [ 540.0, 145.05748]);
		p.setValueAtTime(1.75, [ 540.0, 151.27834]);
		p.setValueAtTime(2.0, [ 540.0, 172.0928]);
		p.setValueAtTime(2.25, [ 540.0, 156.09618]);
		p.setValueAtTime(2.5, [ 540.0, 104.98618]);
		p.setValueAtTime(2.75, [ 540.0, 129.0532]);
		p.setValueAtTime(3.0, [ 540.0, 175.39143]);
		p.setValueAtTime(3.25, [ 540.0, 168.96097]);
		p.setValueAtTime(3.5, [ 540.0, 154.07974]);
		p.setValueAtTime(3.75, [ 540.0, 189.18713]);
		p.setValueAtTime(4.0, [ 540.0, 186.58127]);
		p.setValueAtTime(4.25, [ 540.0, 156.42033]);
		p.setValueAtTime(4.5, [ 540.0, 144.20439]);
		p.setValueAtTime(4.75, [ 540.0, 145.58093]);
		p.setValueAtTime(5.0, [ 540.0, 179.98741]);
		p.setValueAtTime(5.25, [ 540.0, 182.44786]);
		p.setValueAtTime(5.5, [ 540.0, 151.16612]);
		p.setValueAtTime(5.75, [ 540.0, 185.0153]);
		p.setValueAtTime(6.0, [ 540.0, 182.01184]);
		p.setValueAtTime(6.25, [ 540.0, 160.09966]);
		p.setValueAtTime(6.5, [ 540.0, 147.174]);
		p.setValueAtTime(6.75, [ 540.0, 158.34813]);
		p.setValueAtTime(7.0, [ 540.0, 182.26175]);
		p.setValueAtTime(7.25, [ 540.0, 155.40392]);
		p.setValueAtTime(7.5, [ 540.0, 153.83496]);
		p.setValueAtTime(7.75, [ 540.0, 153.83496]);
		p.setValueAtTime(8.0, [ 540.0, 153.83496]);
		p.setValueAtTime(8.25, [ 540.0, 153.83496]);
		p.setValueAtTime(8.5, [ 540.0, 153.83496]);
		p.setValueAtTime(8.75, [ 540.0, 153.83496]);
		p.setValueAtTime(9.0, [ 540.0, 153.83496]);
		p.setValueAtTime(9.25, [ 540.0, 154.85237]);
		p.setValueAtTime(9.5, [ 540.0, 173.16562]);
		p.setValueAtTime(9.75, [ 540.0, 174.18301]);
		p.setValueAtTime(9.958333, [ 540.0, 174.18301]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");

		p.setValueAtTime(0.0, [ 1920.0, 0.0]);
		p.setValueAtTime(0.25, [ 1002.0256, 886.16876]);
		p.setValueAtTime(0.5, [ 1002.66223, 886.5957]);
		p.setValueAtTime(0.75, [ 1001.3427, 886.4433]);
		p.setValueAtTime(1.0, [ 1004.75275, 889.1621]);
		p.setValueAtTime(1.25, [ 1003.02264, 884.94183]);
		p.setValueAtTime(1.5, [ 1002.25305, 878.3257]);
		p.setValueAtTime(1.75, [ 1002.7256, 876.58105]);
		p.setValueAtTime(2.0, [ 1003.8664, 882.47363]);
		p.setValueAtTime(2.25, [ 1001.434, 875.1915]);
		p.setValueAtTime(2.5, [ 998.686, 863.83]);
		p.setValueAtTime(2.75, [ 1001.9091, 866.8637]);
		p.setValueAtTime(3.0, [ 1004.86005, 877.53094]);
		p.setValueAtTime(3.25, [ 1003.38965, 876.797]);
		p.setValueAtTime(3.5, [ 1002.83105, 867.40704]);
		p.setValueAtTime(3.75, [ 1003.8898, 874.31134]);
		p.setValueAtTime(4.0, [ 1000.9206, 873.0504]);
		p.setValueAtTime(4.25, [ 999.6178, 862.6916]);
		p.setValueAtTime(4.5, [ 1001.69006, 860.8823]);
		p.setValueAtTime(4.75, [ 1001.96533, 861.6453]);
		p.setValueAtTime(5.0, [ 1005.237, 873.6507]);
		p.setValueAtTime(5.25, [ 1004.3923, 875.2902]);
		p.setValueAtTime(5.5, [ 1002.2668, 862.79504]);
		p.setValueAtTime(5.75, [ 1004.4977, 869.889]);
		p.setValueAtTime(6.0, [ 1003.16095, 873.6722]);
		p.setValueAtTime(6.25, [ 1000.46844, 866.0307]);
		p.setValueAtTime(6.5, [ 1001.8913, 862.81146]);
		p.setValueAtTime(6.75, [ 1002.0579, 865.10004]);
		p.setValueAtTime(7.0, [ 1002.8547, 874.0903]);
		p.setValueAtTime(7.25, [ 1002.6326, 866.4375]);
		p.setValueAtTime(7.5, [ 1002.6178, 865.9835]);
		p.setValueAtTime(7.75, [ 1002.6178, 865.9835]);
		p.setValueAtTime(8.0, [ 1002.6178, 865.9835]);
		p.setValueAtTime(8.25, [ 1002.6178, 865.9835]);
		p.setValueAtTime(8.5, [ 1002.6178, 865.9835]);
		p.setValueAtTime(8.75, [ 1002.6178, 865.9835]);
		p.setValueAtTime(9.0, [ 1002.6178, 865.9835]);
		p.setValueAtTime(9.25, [ 1002.5961, 866.2464]);
		p.setValueAtTime(9.5, [ 1002.20605, 870.9785]);
		p.setValueAtTime(9.75, [ 1002.1845, 871.24133]);
		p.setValueAtTime(9.958333, [ 1002.1845, 871.24133]);

	app.endUndoGroup();
}  //end script
