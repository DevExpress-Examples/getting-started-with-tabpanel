import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import './App.css';

import TabPanel, { Item } from "devextreme-react/tab-panel";
import Form, { SimpleItem } from "devextreme-react/form";
import TextArea from "devextreme-react/text-area";
import RadioGroup from "devextreme-react/radio-group";

const employeeData = {
  name: 'John Heart',
  position: 'CEO',
  hireDate: new Date(2012, 4, 13),
  officeNumber: 901,
  notes: 'John has been in the Audio/Video industry since 1990. He has led DevAV as its CEO since 2003.',
  roles: ['Chief Officer', 'Administrator', 'Manager']
};

function App() {
  return (
    <TabPanel 
      id="tab-panel"
      loop={true}
      animationEnabled={true} 
      swipeEnabled={true}>
        <Item title="Employee" icon="floppy">
          <Form formData={employeeData}>
            <SimpleItem dataField="name" />
            <SimpleItem dataField="position" />
            <SimpleItem dataField="hireDate" />
            <SimpleItem dataField="officeNumber" />
          </Form>
        </Item>
        <Item title="Notes" icon="comment">
          <TextArea 
            defaultValue={employeeData.notes}
          />
        </Item>
        <Item title="Role" icon="isnotblank" badge="new">
          <RadioGroup 
            items={employeeData.roles}
            defaultValue={employeeData.roles[0]}
          />
        </Item>
    </TabPanel>
  )
}

export default App;
