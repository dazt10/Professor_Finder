// TOGGLE DROPDOWNW VARIABLES
let prog_dropdown = document.querySelector('.program-dropdown');
let year_dropdown = document.querySelector('.year-dropdown');
let year_list = document.querySelector('.year-list');

// TOGGLE BUTTON FOR PROGRAM AND YEAR
prog_dropdown.addEventListener('click', () => {
	prog_dropdown.classList.toggle('active');
	if (year_dropdown.classList.contains('active'));
	year_dropdown.classList.remove('active');
});
year_dropdown.addEventListener('click', () => {
	year_dropdown.classList.toggle('active');
	if (prog_dropdown.classList.contains('active'));
	prog_dropdown.classList.remove('active');
});

// PROGRAM DROPDOWN VARIABLES
let agri_bio = document.getElementById('agri-bio');
let archi = document.getElementById('archi');
let civil_eng = document.getElementById('civil-eng');
let com_eng = document.getElementById('com-eng');
let com_sci = document.getElementById('com-sci');
let electri_eng = document.getElementById('electri-eng');
let electro_eng = document.getElementById('electro-eng');
let ind_eng = document.getElementById('ind-eng');
let ind_tech_auto = document.getElementById('ind-tech-auto');
let ind_tech_electri = document.getElementById('ind-tech-electri');
let ind_tech_electro = document.getElementById('ind-tech-electro');
let info_tech = document.getElementById('info-tech');
let program_name = document.getElementById('program-change');

// FOR ADDING BLOCK WHEN SECTION TEXT CHARACTER IS MORE THAN 10
const section_box = document.querySelectorAll('.section');

// SELECT ALL SECTION NAME
const prog_title = document.querySelectorAll('.prog-title');

// SELECT ALL PROGRAM NAME
const prog_name = document.querySelectorAll('.nameProgram');

// CARD UPDATE
agri_bio.addEventListener('click', () => {
	program_name.innerHTML = 'Agricultural and Biosystems Engineering'; // CHANGE BTN NAME

	// REMOVE DISPLAY: BLOCK;
	section_box.forEach((section) => {
		section.classList.remove('block');
	});

	// CHANGES ALL SECTION NAME
	prog_title.forEach((title) => {
		title.innerHTML = 'BSABE';
	});

	// CHANGES ALL PROGRAM NAME
	prog_name.forEach((progName) => {
		progName.innerHTML = 'Agricultural and Biosystems Engineering';
	});
});

archi.addEventListener('click', () => {
	year_list.innerHTML = '';
	year_list.innerHTML = `
                    <li class="top-year" id="1st-year">First Year</li>
                    <li id="2nd-year">Second Year</li>
                    <li id="3rd-year">Third Year</li>
                    <li id="4th-year">
                        Fourth Year
                    </li>
                    <li class="bottom-year" id="5th-year">
                        Fifth Year
                    </li>
                    `;

	program_name.innerHTML = 'Architecture'; // CHANGE BTN NAME

	// REMOVE DISPLAY: BLOCK;
	section_box.forEach((section) => {
		section.classList.remove('block');
	});

	// CHANGES ALL SECTION NAME
	prog_title.forEach((title) => {
		title.innerHTML = 'BSArch';
	});

	// CHANGES ALL PROGRAM NAME
	prog_name.forEach((progName) => {
		progName.innerHTML = 'Architecture';
	});
});

civil_eng.addEventListener('click', () => {
	program_name.innerHTML = 'Civil Engineering'; // CHANGE BTN NAME

	// REMOVE DISPLAY: BLOCK;
	section_box.forEach((section) => {
		section.classList.remove('block');
	});

	// CHANGES ALL SECTION NAME
	prog_title.forEach((title) => {
		title.innerHTML = 'BSCE';
	});

	// CHANGES ALL PROGRAM NAME
	prog_name.forEach((progName) => {
		progName.innerHTML = 'Civil Engineering';
	});
});

com_eng.addEventListener('click', () => {
	program_name.innerHTML = 'Computer Engineering'; // CHANGE BTN NAME

	// REMOVE DISPLAY: BLOCK;
	section_box.forEach((section) => {
		section.classList.remove('block');
	});

	// CHANGES ALL SECTION NAME
	prog_title.forEach((title) => {
		title.innerHTML = 'BSCpE';
	});

	// CHANGES ALL PROGRAM NAME
	prog_name.forEach((progName) => {
		progName.innerHTML = 'Computer Engineering';
	});
});

com_sci.addEventListener('click', () => {
	program_name.innerHTML = 'Computer Science'; // CHANGE BTN NAME

	// REMOVE DISPLAY: BLOCK;
	section_box.forEach((section) => {
		section.classList.remove('block');
	});

	// CHANGES ALL SECTION NAME
	prog_title.forEach((title) => {
		title.innerHTML = 'BSCS';
	});

	// CHANGES ALL PROGRAM NAME
	prog_name.forEach((progName) => {
		progName.innerHTML = 'Computer Science';
	});
});

electri_eng.addEventListener('click', () => {
	program_name.innerHTML = 'Electrical Engineering'; // CHANGE BTN NAME

	// REMOVE DISPLAY: BLOCK;
	section_box.forEach((section) => {
		section.classList.remove('block');
	});

	// CHANGES ALL SECTION NAME
	prog_title.forEach((title) => {
		title.innerHTML = 'BSEE';
	});

	// CHANGES ALL PROGRAM NAME
	prog_name.forEach((progName) => {
		progName.innerHTML = 'Electrical Engineering';
	});
});

electro_eng.addEventListener('click', () => {
	program_name.innerHTML = 'Electronics Engineering'; // CHANGE BTN NAME

	// REMOVE DISPLAY: BLOCK;
	section_box.forEach((section) => {
		section.classList.remove('block');
	});

	// CHANGES ALL SECTION NAME
	prog_title.forEach((title) => {
		title.innerHTML = 'BSECE';
	});

	// CHANGES ALL PROGRAM NAME
	prog_name.forEach((progName) => {
		progName.innerHTML = 'Electronics Engineering';
	});
});

ind_eng.addEventListener('click', () => {
	program_name.innerHTML = 'Industrial Engineering'; // CHANGE BTN NAME

	// REMOVE DISPLAY: BLOCK;
	section_box.forEach((section) => {
		section.classList.remove('block');
	});

	// CHANGES ALL SECTION NAME
	prog_title.forEach((title) => {
		title.innerHTML = 'BSIE';
	});

	// CHANGES ALL PROGRAM NAME
	prog_name.forEach((progName) => {
		progName.innerHTML = 'Industrial Engineering';
	});
});

ind_tech_auto.addEventListener('click', () => {
	program_name.innerHTML = 'Industrial Technology - Automotive'; // CHANGE BTN NAME

	// ADD DISPLAY: BLOCK;
	section_box.forEach((section) => {
		section.classList.add('block');
	});

	// CHANGES ALL SECTION NAME
	prog_title.forEach((title) => {
		title.innerHTML = 'BSIT-Autotomotive';
	});

	// CHANGES ALL PROGRAM NAME
	prog_name.forEach((progName) => {
		progName.innerHTML = 'Industrial Technology - Automotive';
	});
});

ind_tech_electri.addEventListener('click', () => {
	program_name.innerHTML = 'Industrial Technology - Electrical'; // CHANGE BTN NAME

	// ADD DISPLAY: BLOCK;
	section_box.forEach((section) => {
		section.classList.add('block');
	});

	// CHANGES ALL SECTION NAME
	prog_title.forEach((title) => {
		title.innerHTML = 'BSIT-Electrical';
	});

	// CHANGES ALL PROGRAM NAME
	prog_name.forEach((progName) => {
		progName.innerHTML = 'Industrial Technology - Electrical';
	});
});

ind_tech_electro.addEventListener('click', () => {
	program_name.innerHTML = 'Industrial Technology - Electronics'; // CHANGE BTN NAME

	// ADD DISPLAY: BLOCK;
	section_box.forEach((section) => {
		section.classList.add('block');
	});

	// CHANGES ALL SECTION NAME
	prog_title.forEach((title) => {
		title.innerHTML = 'BSIT-Electronics';
	});

	// CHANGES ALL PROGRAM NAME
	prog_name.forEach((progName) => {
		progName.innerHTML = 'Industrial Technology - Electronics';
	});
});

info_tech.addEventListener('click', () => {
	program_name.innerHTML = 'Information Technology'; // CHANGE BTN NAME

	// REMOVE DISPLAY: BLOCK;
	section_box.forEach((section) => {
		section.classList.remove('block');
	});

	// CHANGES ALL SECTION NAME
	prog_title.forEach((title) => {
		title.innerHTML = 'BSIT';
	});

	// CHANGES ALL PROGRAM NAME
	prog_name.forEach((progName) => {
		progName.innerHTML = 'Information Technology';
	});
});

// YEAR LEVEL DROPDOWN
let firstYear = document.getElementById('1st-year');
let secondYear = document.getElementById('2nd-year');
let thirdYear = document.getElementById('3rd-year');
let fourthYear = document.getElementById('4th-year');
let fifthYear = document.getElementById('5th-year');
let year_name = document.getElementById('year-change');

// YEAR AND SECTION IN TITLE
let yearLevel = document.querySelectorAll('.yearLevel');
let year_section1 = document.getElementById('year-title1');
let year_section2 = document.getElementById('year-title2');
let year_section3 = document.getElementById('year-title3');
let year_section4 = document.getElementById('year-title4');
let year_section5 = document.getElementById('year-title5');
let year_section6 = document.getElementById('year-title6');
let year_section7 = document.getElementById('year-title7');
let year_section8 = document.getElementById('year-title8');

// YEAR UPDATE
firstYear.addEventListener('click', () => {
	year_name.innerHTML = 'First Year'; // DROPDOWN

	yearLevel.forEach((level) => {
		level.innerHTML = '1st Year';
	});

	year_section1.innerHTML = '1-1';
	year_section2.innerHTML = '1-2';
	year_section3.innerHTML = '1-3';
	year_section4.innerHTML = '1-4';
	year_section5.innerHTML = '1-5';
	year_section6.innerHTML = '1-6';
	year_section7.innerHTML = '1-7';
	year_section8.innerHTML = '1-8';
});

secondYear.addEventListener('click', () => {
	year_name.innerHTML = 'Second Year'; // DROPDOWN

	yearLevel.forEach((level) => {
		level.innerHTML = '2nd Year';
	});

	year_section1.innerHTML = '2-1';
	year_section2.innerHTML = '2-2';
	year_section3.innerHTML = '2-3';
	year_section4.innerHTML = '2-4';
	year_section5.innerHTML = '2-5';
	year_section6.innerHTML = '2-6';
	year_section7.innerHTML = '2-7';
	year_section8.innerHTML = '2-8';
});

thirdYear.addEventListener('click', () => {
	year_name.innerHTML = 'Third Year'; // DROPDOWN

	yearLevel.forEach((level) => {
		level.innerHTML = '3rd Year';
	});

	year_section1.innerHTML = '3-1';
	year_section2.innerHTML = '3-2';
	year_section3.innerHTML = '3-3';
	year_section4.innerHTML = '3-4';
	year_section5.innerHTML = '3-5';
	year_section6.innerHTML = '3-6';
	year_section7.innerHTML = '3-7';
	year_section8.innerHTML = '3-8';
});

fourthYear.addEventListener('click', () => {
	year_name.innerHTML = 'Fourth Year'; // DROPDOWN

	yearLevel.forEach((level) => {
		level.innerHTML = '4th Year';
	});

	year_section1.innerHTML = '4-1';
	year_section2.innerHTML = '4-2';
	year_section3.innerHTML = '4-3';
	year_section4.innerHTML = '4-4';
	year_section5.innerHTML = '4-5';
	year_section6.innerHTML = '4-6';
	year_section7.innerHTML = '4-7';
	year_section8.innerHTML = '4-8';
});

fifthYear.addEventListener('click', () => {
	year_name.innerHTML = 'Fifth Year Year'; // DROPDOWN

	yearLevel.forEach((level) => {
		level.innerHTML = '5th Year';
	});

	year_section1.innerHTML = '5-1';
	year_section2.innerHTML = '5-2';
	year_section3.innerHTML = '5-3';
	year_section4.innerHTML = '5-4';
	year_section5.innerHTML = '5-5';
	year_section6.innerHTML = '5-6';
	year_section7.innerHTML = '5-7';
	year_section8.innerHTML = '5-8';
});
