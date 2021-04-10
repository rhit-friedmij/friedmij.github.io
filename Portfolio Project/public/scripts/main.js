/**
 * @fileoverview
 * Provides the JavaScript interactions for all pages.
 *
 * @author 
 * PUT_YOUR_NAME_HERE
 */

/** namespace. */
var rhit = rhit || {};

/** globals */
rhit.variableName = "";

/** function and class syntax examples */
rhit.functionName = function () {
	/** function body */
};

rhit.ClassName = class {
	constructor() {

	}

	methodName() {

	}
}

/* Main */
/** function and class syntax examples */
rhit.main = function () {
	console.log("Ready");
    const portfolioPhoto = document.getElementById("processorImg");
    portfolioPhoto.onclick = (event) => {
        if (portfolioPhoto.dataset.expanded == "true") {
            portfolioPhoto.src = "images/portfolio/processorProject.png";
            portfolioPhoto.dataset.expanded = "false";
        } else {
            portfolioPhoto.src = "images/portfolio/processorProject-alt.png";
            portfolioPhoto.dataset.expanded = "true";
        }
    }

    const parkPhoto = document.getElementById("parkImg");
    parkPhoto.onclick = (event) => {
        if (parkPhoto.dataset.expanded == "true") {
            parkPhoto.src = "images/portfolio/parkProject.png";
            parkPhoto.dataset.expanded = "false";
        } else {
            parkPhoto.src = "images/portfolio/parkProject-alt.png";
            parkPhoto.dataset.expanded = "true";
        }
    }

    const databasePhoto = document.getElementById("databaseImg");
    databasePhoto.onclick = (event) => {
        if (databasePhoto.dataset.expanded == "true") {
            databasePhoto.src = "images/portfolio/databaseProject.png";
            databasePhoto.dataset.expanded = "false";
        } else {
            databasePhoto.src = "images/portfolio/databaseProject-alt.png";
            databasePhoto.dataset.expanded = "true";
        }
    }

    const arcadePhoto = document.getElementById("arcadeImg");
    arcadePhoto.onclick = (event) => {
        if (arcadePhoto.dataset.expanded == "true") {
            arcadePhoto.src = "images/portfolio/arcadeProject.png";
            arcadePhoto.dataset.expanded = "false";
        } else {
            arcadePhoto.src = "images/portfolio/arcadeProject-alt.png";
            arcadePhoto.dataset.expanded = "true";
        }
    }
};

rhit.main();
