window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
  });
  
  createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                       "<th>Salary</th><th>StartDate</th><th>Actions</th>";
  
    const innerHtml = `${headerHtml}
    <tr>
      <td class="profile"><img alt="" src="..\Assets\profile\Ellipse -5.png">
      </td>
      <td>Madhukar Tatiraju</td>
      <td>Male</td>
      <td>
        <div class="dept-label">HR</div>
        <div class="dept-label">Finance</div>
      </td>
      <td>300000</td>
      <td>1 Nov 2020</td>
      <td>
        <img id="1" onclick="remove(this)" alt="delete" src="E:\HTML\Day_44_AddEmployee_payroll\Assets\icons\delete-black-18dp.svg">
        <img id="1" alt="edit" onclick="update(this)" src="E:\HTML\Day_44_AddEmployee_payroll\Assets\icons\create-black-18dp.svg">
      </td>
    </tr>
      `;
    document.querySelector('#table-display').innerHTML = innerHtml;
  }