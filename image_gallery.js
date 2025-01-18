function sg(sectionId) {
    const sections = document.querySelectorAll('.gallery-section');
    sections.forEach(section => section.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
}