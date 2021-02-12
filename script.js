const data = [
  {
    id: 1,
    company: "Photosnap",
    logo: "./images/photosnap.svg",
    new: true,
    featured: true,
    position: "Senior Frontend Developer",
    role: "Frontend",
    level: "Senior",
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["HTML", "CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 2,
    company: "Manage",
    logo: "./images/manage.svg",
    new: true,
    featured: true,
    position: "Fullstack Developer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1d ago",
    contract: "Part Time",
    location: "Remote",
    languages: ["Python"],
    tools: ["React"],
  },
  {
    id: 3,
    company: "Account",
    logo: "./images/account.svg",
    new: true,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2d ago",
    contract: "Part Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
  {
    id: 4,
    company: "MyHome",
    logo: "./images/myhome.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "5d ago",
    contract: "Contract",
    location: "USA Only",
    languages: ["CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 5,
    company: "Loop Studios",
    logo: "./images/loop-studios.svg",
    new: false,
    featured: false,
    position: "Software Engineer",
    role: "FullStack",
    level: "Midweight",
    postedAt: "1w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["Ruby", "Sass"],
  },
  {
    id: 6,
    company: "FaceIt",
    logo: "./images/faceit.svg",
    new: false,
    featured: false,
    position: "Junior Backend Developer",
    role: "Backend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "UK Only",
    languages: ["Ruby"],
    tools: ["RoR"],
  },
  {
    id: 7,
    company: "Shortly",
    logo: "./images/shortly.svg",
    new: false,
    featured: false,
    position: "Junior Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["HTML", "JavaScript"],
    tools: ["Sass"],
  },
  {
    id: 8,
    company: "Insure",
    logo: "./images/insure.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["Vue", "Sass"],
  },
  {
    id: 9,
    company: "Eyecam Co.",
    logo: "./images/eyecam-co.svg",
    new: false,
    featured: false,
    position: "Full Stack Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "3w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript", "Python"],
    tools: ["Django"],
  },
  {
    id: 10,
    company: "The Air Filter Company",
    logo: "./images/the-air-filter-company.svg",
    new: false,
    featured: false,
    position: "Front-end Dev",
    role: "Frontend",
    level: "Junior",
    postedAt: "1mo ago",
    contract: "Part Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
];

const jobList = document.querySelector(".job-list");
const tagsWrapper = document.querySelector(".tags-wrapper");
const clearTagBtn = document.querySelector(".clear-wrapper").firstElementChild;
const filterWrapper = document.querySelector(".filter-wrapper");

function loadData() {
  data.forEach((item) => {
    // Parent
    let jobWrapper = document.createElement("div");
    jobWrapper.classList.add("job-wrapper");
    jobList.appendChild(jobWrapper);

    // Job Wrapper Children
    let img = document.createElement("img");
    img.setAttribute("src", item.logo);
    jobWrapper.appendChild(img);

    let infoSection = document.createElement("div");
    infoSection.classList.add("info-section");
    jobWrapper.appendChild(infoSection);

    let tagsSection = document.createElement("div");
    tagsSection.classList.add("tags-section", item.role, item.level);
    jobWrapper.appendChild(tagsSection);

    // Info Section Children
    let header = document.createElement("div");
    header.classList.add("header");
    infoSection.appendChild(header);

    let main = document.createElement("div");
    main.classList.add("main");
    infoSection.appendChild(main);

    let footer = document.createElement("div");
    footer.classList.add("footer");
    infoSection.appendChild(footer);

    // Tags Section Children

    let role = document.createElement("span");
    role.classList.add("tag");
    role.innerHTML = item.role;
    tagsSection.appendChild(role);
    role.addEventListener("click", selectTag);

    let level = document.createElement("span");
    level.classList.add("tag");
    level.innerHTML = item.level;
    tagsSection.appendChild(level);
    level.addEventListener("click", selectTag);

    item.languages.forEach((lang) => {
      let language = document.createElement("span");
      language.classList.add("tag");
      language.innerHTML = lang;
      language.addEventListener("click", selectTag);
      tagsSection.appendChild(language);
      tagsSection.classList.add(lang);
    });

    item.tools.forEach((tool) => {
      let toolVar = document.createElement("span");
      toolVar.classList.add("tag");
      toolVar.innerHTML = tool;
      toolVar.addEventListener("click", selectTag);
      tagsSection.appendChild(toolVar);
      tagsSection.classList.add(tool);
    });

    // Header Children

    let company = document.createElement("span");
    company.classList.add("company");
    company.innerHTML = item.company;
    header.appendChild(company);

    if (item.new == true) {
      let newCheck = document.createElement("span");
      newCheck.classList.add("new");
      newCheck.innerHTML = "NEW!";
      header.appendChild(newCheck);
    }

    if (item.featured == true) {
      let featured = document.createElement("span");
      featured.classList.add("featured");
      featured.innerHTML = "FEATURED";
      header.appendChild(featured);
    }

    // Main Children

    let position = document.createElement("span");
    position.classList.add("position");
    position.innerHTML = item.position;
    main.appendChild(position);

    // Footer Children

    let time = document.createElement("span");
    time.classList.add("time");
    time.innerHTML = item.postedAt;
    footer.appendChild(time);

    let dividerOne = document.createElement("div");
    dividerOne.classList.add("divider");
    footer.appendChild(dividerOne);

    let contract = document.createElement("span");
    contract.classList.add("contract");
    contract.innerHTML = item.contract;
    footer.appendChild(contract);

    let dividerTwo = document.createElement("div");
    dividerTwo.classList.add("divider");
    footer.appendChild(dividerTwo);

    let location = document.createElement("span");
    location.classList.add("location");
    location.innerHTML = item.location;
    footer.appendChild(location);
  });
}

function selectTag() {
  filterWrapper.classList.remove("hide");
  const activeFilters = document.querySelectorAll(".filter-name");
  const activeFiltersText = Array.from(activeFilters).map(
    (item) => item.innerHTML
  );
  const thisText = (text) => text == this.innerHTML;

  if (activeFiltersText.some(thisText) != true) {
    let filterTag = document.createElement("div");
    filterTag.classList.add("tag", "filter-tag");
    tagsWrapper.appendChild(filterTag);

    let filterName = document.createElement("span");
    filterName.classList.add("filter-name");
    filterName.innerHTML = this.innerHTML;
    filterTag.appendChild(filterName);

    let iconRemove = document.createElement("img");
    iconRemove.setAttribute("src", "images/icon-remove.svg");
    filterTag.appendChild(iconRemove);
    iconRemove.addEventListener("click", function () {
      if (activeFilters.length < 1) {
        filterTag.remove();
        filterWrapper.classList.add("hide");
      } else {
        filterTag.remove();
      }
    });
  }
  const allTagsSections = document.querySelectorAll(".tags-section");
  allTagsSections.forEach((section) => {
    if (section.classList.contains(this.innerHTML)) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });
  allTagsSections.forEach((section) => {
    if (section.classList.contains("active") != true) {
      section.parentElement.style.display = "none";
    }
  });
}

function clearTags() {
  const activeFilters = document.querySelectorAll(".filter-tag");
  activeFilters.forEach((tag) => tag.remove());
  filterWrapper.classList.add("hide");
  const allJobWrappers = document.querySelectorAll(".job-wrapper");
  allJobWrappers.forEach((wrapper) => (wrapper.style.display = "block"));
}

clearTagBtn.addEventListener("click", clearTags);

loadData();
