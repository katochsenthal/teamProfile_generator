const generateHtml = (data) => {
  const html = [];

  const generateManager = (manager) => {
    const { name, id, email, officeNumber } = manager;
    let managerHtml = `
        <div class="card bg-primary mb-3" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <i class="fas fa-mug-hot"> Manager</i>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${id}</li>
          <li class="list-group-item">Email: ${email}</li>
          <li class="list-group-item">Office number: ${officeNumber}</li>
        </ul>
      </div>
        `;
    html.push(managerHtml);
  };
  const generateEngineer = (engineer) => {
    const { name, id, email, github } = engineer;
    let engineerHtml = `
        <div class="card bg-primary mb-3" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <i class="fas fa-mug-hot"> Engineer</i>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${id}</li>
          <li class="list-group-item">Email: ${email}</li>
          <li class="list-group-item">${github}</li>
        </ul>
      </div>
        `;
    html.push(engineerHtml);
  };
  const generateIntern = (intern) => {
    const { name, id, email, school } = intern;
    let internHtml = `
        <div class="card bg-primary mb-3" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <i class="fas fa-mug-hot"> Intern</i>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${id}</li>
          <li class="list-group-item">Email: ${email}</li>
          <li class="list-group-item">${school}</li>
        </ul>
      </div>
        `;
    html.push(internHtml);
  };

  for (let i = 0; i < data.length; i++) {
    if (data[i].getRole() === "Manager") {
      generateManager(data[i]);
    }
    if (data[i].getRole() === "Engineer") {
      generateEngineer(data[i]);
    }
    if (data[i].getRole() === "Intern") {
      generateIntern(data[i]);
    }
  }

  return html.join("");
};

module.exports = { generateHtml };
