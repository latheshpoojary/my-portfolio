const skill = document.querySelector('.skill-desc');
const education = document.querySelector('.education-desc');
const certificate = document.querySelector('.certificate-desc');
const showButton = document.getElementById("showButton");
const parent = document.querySelector(".project");
let toggle = false;
let sections = document.querySelectorAll('section');

showButton.addEventListener("click", () => {
	toggle = !toggle;
	const hiddenDivs = parent.querySelectorAll("div:nth-child(n + 4)");
	if (toggle) {
		showButton.textContent = "Show Less"
		hiddenDivs.forEach((div) => {
			div.style.opacity = 1;
      div.style.display = "block";
    });
	}
	else {
		showButton.textContent = "Show More"
		
		hiddenDivs.forEach((div) => {
      div.style.display = "none";
    });
	}
    
	});
	

	document.getElementById('download').addEventListener('click', function() {
		// Create an anchor element to trigger the download
		var link = document.createElement('a');
		link.setAttribute('href', 'c:/Users/PACE/Downloads/Lathesh_4AL19IS020_resume (2).pdf'); // Replace with the actual path to your PDF file
		link.setAttribute('download', 'c:/Users/PACE/Downloads/Lathesh_4AL19IS020_resume (2).pdf'); // You can change the downloaded file's name here
		link.style.display = 'none';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	});

window.onscroll = () => {
	
	sections.forEach(sec => {
		console.log("started");
			
		let top = window.scrollY;
		let secOffset = sec.offsetTop - 600;
		let secHeight = sec.offsetHeight;
		if (top >= secOffset && top < secOffset + secHeight ) {
			sec.classList.add('show-anime');
				
			// p[i].classList.add('active')
		}
	})
}


function showDetails(call){
	if (call === 'skill') {
		education.style.display = 'none';
		certificate.style.display = 'none';
		skill.style.display = 'block';
	}
	if (call === 'education') {
		certificate.style.display = 'none';
		skill.style.display = 'none';
		education.style.display = 'block';

	}
	if (call === 'certificate') {
		education.style.display = 'none';
		skill.style.display = 'none';
		certificate.style.display = 'block';

	}
}
