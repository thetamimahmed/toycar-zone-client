// import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const Toys = () => {
    // const [toys, setToys] = useState([])
    const tab1 = () =>{
        console.log("clicked 1")
        
    }
    return (
        <div className="max-w-6xl mx-auto mb-10">
            <Tabs>
                <TabList className="flex justify-center space-x-10">
                    <Tab onClick={tab1} className="tab-btn">Sports Car</Tab>
                    <Tab onClick={tab1} className="tab-btn">Mini Truck</Tab>
                    <Tab onClick={tab1} className="tab-btn">Police Car</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Toys;