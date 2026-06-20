/**
 * Ramzan Digital Agency OS
 * Main Frontend Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    initProjectGrid();
    initFilters();
});

function initProjectGrid() {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;
    
    // Check if PROJECTS_DATA exists (loaded from js/data/projects.js)
    if (typeof PROJECTS_DATA === 'undefined') {
        console.error("PROJECTS_DATA is not loaded.");
        return;
    }

    renderProjects(PROJECTS_DATA);
}

function renderProjects(projects) {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    grid.innerHTML = ''; // Clear existing

    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.style.background = 'var(--bg-main)';
        card.style.borderRadius = 'var(--radius-lg)';
        card.style.overflow = 'hidden';
        card.style.boxShadow = 'var(--shadow-sm)';
        card.style.transition = 'var(--transition-base)';
        
        // Hover effect setup would go into CSS, using inline for simplicity in architecture
        
        card.innerHTML = `
            <div style="height: 200px; background: var(--bg-surface-dark); display: flex; align-items: center; justify-content: center; overflow: hidden;">
                <img src="${project.thumbnail}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div style="padding: var(--space-6);">
                <span style="font-size: var(--text-sm); color: var(--color-accent); font-weight: 600; text-transform: uppercase;">${project.industry}</span>
                <h3 style="margin: var(--space-2) 0;">${project.title}</h3>
                <p class="text-secondary" style="font-size: var(--text-sm); margin-bottom: var(--space-4); line-height: 1.6;">
                    ${project.description}
                </p>
                <div style="margin-bottom: var(--space-4);">
                    <strong style="font-size: var(--text-sm);">Key Outcomes:</strong>
                    <ul style="font-size: var(--text-sm); color: var(--text-secondary); margin-top: var(--space-2); padding-left: 1rem; list-style: disc;">
                        ${project.outcomes.map(o => `<li>${o}</li>`).join('')}
                    </ul>
                </div>
                <div class="flex gap-4">
                    <a href="${window.location.pathname.includes('/case-studies/') ? project.caseStudyUrl : 'case-studies/' + project.caseStudyUrl}" class="btn btn-outline" style="padding: 0.5rem 1rem; font-size: var(--text-sm); flex: 1;">Case Study</a>
                    <a href="${project.liveDemoUrl}" class="btn btn-primary" style="padding: 0.5rem 1rem; font-size: var(--text-sm); flex: 1;" target="_blank">Live Demo</a>
                </div>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

function initFilters() {
    const filterBtns = document.querySelectorAll('#project-filters button');
    if (filterBtns.length === 0) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Reset active states
            filterBtns.forEach(b => {
                b.className = 'btn';
                b.style.color = 'var(--text-secondary)';
            });
            
            // Set current active
            e.target.className = 'btn btn-outline';
            e.target.style.color = 'var(--color-primary)';

            const filter = e.target.getAttribute('data-filter');
            
            if (filter === 'all') {
                renderProjects(PROJECTS_DATA);
            } else {
                const filtered = PROJECTS_DATA.filter(p => p.industrySlug === filter);
                renderProjects(filtered);
            }
        });
    });
}
