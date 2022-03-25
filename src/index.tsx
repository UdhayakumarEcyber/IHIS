// import * as React from "react";
// import { registerWidget, registerLink, registerUI, IContextProvider, } from './uxp';
// import { TitleBar, FilterPanel, WidgetWrapper } from "uxp/components";
// import './styles.scss';

import * as React from "react";
import { registerWidget, registerLink, registerUI, IContextProvider, } from './uxp';
import { DataList, TimeRangePicker, DateTimePicker, WidgetWrapper, TitleBar, ItemListCard, FilterPanel,useUpdateWidgetProps, Modal, Loading, DataTable , DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter } from "uxp/components";
 
import './styles.scss';

import { ResponsiveContainer, PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell, ComposedChart, } from 'recharts';
  
import { ResponsivePie } from '@nivo/pie';

interface IWidgetProps {
  
    uxpContext?: IContextProvider,
    instanceId?: string,
    startTime: string | Date; endTime: string | Date,

    TargetStartDate: number | Date; 
    isActive: string;
} 

const IHISWidget: React.FunctionComponent<IWidgetProps> = (props) => {

    let [selected, setSelected] = React.useState<string | null>("op-1"); 

    // <TitleBar title='Utility Baseline Comparison'>

    //         <h1>IHIS DASHBOARD</h1>

    //         <div className="rht-title-section"> 

    //             <Select
    //                 selected={selected}
    //                 options={[
    //                     { label: "Today", value: "op-1" },
    //                     { label: "This Week", value: "op-2" },
    //                     { label: "This Month", value: "op-3" },
    //                     { label: "This Year", value: "op-4" },
    //                 ]}
    //                 onChange={(value) => { setSelected(value) }}
                    
    //                 isValid={selected ? selected?.length > 0 : null}
    //             /> 

    //         </div> 

    // </TitleBar>   
    
 


const data_list = [
    {
        id: 'a',
        medical_details: 'PATIENTS',  
        medical_count : '52',
        sec:'patient'
    },
    {
        id: 'b',  
        medical_details: 'MEDICINES DISPENSED',  
        medical_count : '120',
        sec:'dispended'
    },
    {
        id: 'c', 
        medical_details: 'AVERAGE WAIT TIME',  
        medical_count : '5',
        min : 'MIN',
        sec:'average'
    },
    {
        id: 'd', 
        medical_details: 'ERRORS', 
        medical_count : '24',
        sec:'error'
    },
  ];

    return (

        <WidgetWrapper>

             {/* <TitleBar title=''></TitleBar>   */}

            <div className="medical-number-widget-box">   

                <ul>
               
                    {data_list.map((item) => ( 

                            <li> 

                                <div className={`${item.sec} medical-sec`}> 
                                    <p>{item.medical_details}</p>
                                    <h2>{item.medical_count}</h2>
                                </div>
                                 
                            </li>     
                    ))}  

            </ul>
       </div> 

        </WidgetWrapper>
    )
};


 
 

  const TimeDispense: React.FunctionComponent<IWidgetProps> = (props) => {
    
     
    let timeDispenseData = [
        {"ServiceCategoryKey":"1","ServiceCategoryName":"WIthin 5min","WRCounts":"5"},
        {"ServiceCategoryKey":"2","ServiceCategoryName":"Within 10min","WRCounts":"4"},
        {"ServiceCategoryKey":"3","ServiceCategoryName":"Within 15min","WRCounts":"2"},
        {"ServiceCategoryKey":"4","ServiceCategoryName":"More than 15min","WRCounts":"1"}
    ];

  const COLORS = ['#7612bf', '#00C49F', '#FFBB28', '#FF8042', '#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  
         
        return (
             <>
            <WidgetWrapper className="assetage_widget">
                <TitleBar title='Time to Dispense'> </TitleBar>  
    
                <div className="assetage_chart" style={{width: "100%", height: "85%"}}>    
                                <ResponsiveContainer>   
                                     <ResponsivePie  
                                        data={timeDispenseData}
                                        id ="ServiceCategoryName" 
                                        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                                        innerRadius={0.5}
                                        padAngle={0}
                                        cornerRadius={0}
                                        // colors={{ scheme: "nivo" }} 
                                        colors={COLORS} 
                                        borderWidth={0}
                                        borderColor={{ from: "color", modifiers: [["darker", 0.2]] }} 
                                        animate={true}   
                                        value = "WRCounts"  
                                        activeOuterRadiusOffset={8}  
                                        arcLinkLabelsSkipAngle={10}
                                        arcLinkLabelsTextColor="#333333"
                                        arcLinkLabelsThickness={2}
                                        arcLinkLabelsColor={{ from: 'color' }}
                                        arcLabelsSkipAngle={10}
                                        arcLabelsTextColor={{ from: 'color', modifiers: [ [ 'darker', 2 ] ] }} 

                                        legends={[
                                            {
                                                anchor: 'bottom',
                                                direction: 'row',
                                                justify: false,
                                                translateX: 0,
                                                translateY: 56,
                                                itemsSpacing: 0,
                                                itemWidth: 100,
                                                itemHeight: 18,
                                                itemTextColor: '#999',
                                                itemDirection: 'left-to-right',
                                                itemOpacity: 1,
                                                symbolSize: 18,
                                                symbolShape: 'circle',
                                                effects: [
                                                    {
                                                        on: 'hover',
                                                        style: {
                                                            itemTextColor: '#000'
                                                        }
                                                    }
                                                ]
                                            }
                                        ]}
                                    />    
 
                                </ResponsiveContainer>   
      
    
                        </div> 
                                    
                    </WidgetWrapper> 
     
                </>
        )
    }; 

    


    const LastestDischarges: React.FunctionComponent<IWidgetProps> = (props) => {


        let [toggleFilterValue, setToggleFilterValue] = React.useState<string>("month");
    
        const LastestDischargesdata = [
            { 
                icon : "https://static.iviva.com/images/uxp-generic-widgets/moniter.png",
                request: "Water Leak in ",
                user: "Johnson & Johnson request #81",
                section: "Zone 3",
                status: "pending",  
                date: "23/0702020"
            },
            { 
                icon : "https://static.iviva.com/images/uxp-generic-widgets/moniter.png",
                request: "Water Leak in ",
                user: "Johnson & Johnson request #81",
                section: "Parking 1",
                status: "pending",   
                date: "23/0702020"
            },
            { 
                icon : "https://static.iviva.com/images/uxp-generic-widgets/chart-black-icon.png",
                request: "Parking Damge",
                user: "Johnson & Johnson request #80",
                section: "Facility one",
                status: "approved",  
                date: "23/0702020",
                stip : "A1"
            },
            { 
                icon : "https://static.iviva.com/images/uxp-generic-widgets/chart-black-icon.png",
                request: "Lights not working at",
                user: "Johnson & Johnson request #80",
                section: "Zone 3",
                status: "approved", 
                date: "23/0702020"
            },
            { 
                icon : "https://static.iviva.com/images/uxp-generic-widgets/chart-black-icon.png",
                request: "AC not working at",
                user: "Johnson & Johnson request #80",
                section: "Facility 12",
                status: "overdue",  
                date: "23/0702020"
            },
            { 
                icon : "https://static.iviva.com/images/uxp-generic-widgets/chart-black-icon.png",
                request: "Smoke in AC vents",
                user: "Johnson & Johnson request #80",
                section: "Facility 20",
                status: "assigned",  
                date: "23/0702020"
            },
            
            { 
                icon : "https://static.iviva.com/images/uxp-generic-widgets/chart-black-icon.png",
                request: "Water Leak in ",
                user: "Johnson & Johnson request #80",
                section: "Zone 3",
                status: "overdue", 
                date: "23/0702020"
            },
            { 
                icon : "https://static.iviva.com/images/uxp-generic-widgets/chart-black-icon.png",
                request: "Parking Damge",
                user: "Johnson & Johnson request #80",
                section: "Facility one",
                status: "approved",  
                date: "23/0702020",
                stip : "A2"
            },
            { 
                icon : "https://static.iviva.com/images/uxp-generic-widgets/chart-black-icon.png",
                request: "Lights not working at",
                user: "Johnson & Johnson request #80",
                section: "Zone 3",
                status: "approved", 
                date: "23/0702020"
            }, 
             
            
        ];
     
        const getDataItems = (max: number, pageToken: string) => {
            let last = 0
    
            if (pageToken !== null) last = parseInt(pageToken);
    
            let p = new Promise<{ items: Array<any>, pageToken: string }>((resolve, reject) => {
                let data = LastestDischargesdata.filter((item: any, key: number) => (key > last && key <= last + max));
                let response = { items: data, pageToken: (last + data.length).toString() }
                resolve(response);
            })
    
            return p;
        }
        
    
           // datalist
           const renderItem = (item: any, key: number) => {
            return (<div className="list-item"> 
                <div className="icon"><img src={item.icon}></img></div>
                <div className="work-request">
                    <div className="user">{item.user}</div>
                    <div className="req"><p>{item.request}</p> <div className="section">{item.section}</div></div>  
                </div> 
    
                <div className="work-status">
                    <div className={`status ${item.status}`} >{item.status}</div>
                    {/* <div className="date">{item.date}</div> */}
                </div> 
                
                
                
            </div>)
        } 
        
        return (
            <WidgetWrapper className="service_list_widget">
                <TitleBar title='Latest Discharges'>
    
    
                    <div className="rht-title-section"> 
                                    
                            {/* <ToggleFilter
                                options={[
                                    { label: "High Priority", value: "month" },
                                    { label: "Low Priority", value: "week" } 
                                ]}
                                value={toggleFilterValue}
                                onChange={(value) => { setToggleFilterValue(value) }}
                            /> */}
    
                            <FilterPanel> 
                            </FilterPanel>  
    
                    </div>
    
                </TitleBar>
    
    
                <div className="service-request-widget">   
    
                    <div className="service-request-body"> 
            
                            <DataList
                                data={(max, last) => getDataItems(max, last)}
                                renderItem={renderItem}
                                pageSize={10}
                            />
                    </div>   
    
            </div> 
    
            </WidgetWrapper>
        )
    };



    
const DispenseItem: React.FunctionComponent<IWidgetProps> = (props) => { 

        

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const COLORS = [ '#0088FE', '#d00581'];
 
     
    let dispenseItemData = [
        {"monthname":"08 AM","ServiceCategoryName":"Access Control System", "ServiceCategoryKey":"2" ,"CWOMCOUNT":"5"}, 
        {"monthname":"08 AM","ServiceCategoryName":"Building Security", "ServiceCategoryKey":"4" ,"CWOMCOUNT":"1"},
        {"monthname":"09 AM","ServiceCategoryName":"CCTV", "ServiceCategoryKey":"4", "CWOMCOUNT":"5" },
        {"monthname":"09 AM","ServiceCategoryName":"ACMV", "ServiceCategoryKey":"3" ,"CWOMCOUNT":"3"},
        {"monthname":"10 AM","ServiceCategoryName":"Building Security", "ServiceCategoryKey":"4" ,"CWOMCOUNT":"5"},
        {"monthname":"10 AM","ServiceCategoryName":"Audio Visual Systems", "ServiceCategoryKey":"3", "CWOMCOUNT":"4"}, 
        {"monthname":"11 AM","ServiceCategoryName":"Building Management Systems", "ServiceCategoryKey":"7" ,"CWOMCOUNT":"2"},
        {"monthname":"12 AM","ServiceCategoryName":"Building Security", "ServiceCategoryKey":"4" ,"CWOMCOUNT":"8"},
        {"monthname":"01 PM","ServiceCategoryName":"CCTV", "ServiceCategoryKey":"4", "CWOMCOUNT":"5" },
        {"monthname":"02 PM","ServiceCategoryName":"Access Control System", "ServiceCategoryKey":"2" ,"CWOMCOUNT":"5"},
        {"monthname":"02 PM","ServiceCategoryName":"CCTV", "ServiceCategoryKey":"4", "CWOMCOUNT":"5" },
        {"monthname":"03 PM","ServiceCategoryName":"ACMV", "ServiceCategoryKey":"3" ,"CWOMCOUNT":"1"},
        {"monthname":"04 PM","ServiceCategoryName":"Audio Visual Systems", "ServiceCategoryKey":"3", "CWOMCOUNT":"4"},
        {"monthname":"05 PM","ServiceCategoryName":"Building Management Systems", "ServiceCategoryKey":"7" ,"CWOMCOUNT":"2"} 
        
    ]
      

    let currentColor = 0;
    function nextColor() {
        currentColor++;
        return COLORS[currentColor % COLORS.length];
    }
     let ServiceCategories:any = {};
     function transformData(data:any) {
         let months:any = {};
         for(let row of data) {
             let month = row.monthname;
             if (!months[month]) {
                 months[month] = {}; 
             }
             months[month][row.ServiceCategoryName] = row.CWOMCOUNT;
             if (!ServiceCategories[row.ServiceCategoryName]) {
                 ServiceCategories[row.ServiceCategoryName] = {key:row.ServiceCategoryKey,color:nextColor()};
             }
         }
         let monthKeys = Object.keys(months);
         let x =  monthKeys.map(month => Object.assign({monthname:month},months[month])); 
         return x;
     }
     
    
        return (
             <>
            <WidgetWrapper className="assetage_widget">
                <TitleBar title='Dispensed Items by Hour of Day'></TitleBar>  
    
                <div className="assetage_chart">    
    
                <ResponsiveContainer >  
                                <BarChart
                                    width={500}
                                    height={200}
                                    data={transformData(dispenseItemData)}
                                    margin={{
                                        top: 2, right: 0, left: 0, bottom: 2,
                                    }}>
                                          
                                        <CartesianGrid strokeDasharray="0 0" />
                                        <XAxis dataKey="monthname" />
                                        <YAxis orientation="left" ticks={[0, 5, 10, 15, 20]} />
                                         <Tooltip  />  
                                            {
                                                  Object.keys(ServiceCategories).map(key => (
                                            <Bar stackId="a" barSize={20} name={key} fill={ServiceCategories[key].color} dataKey={key} />

                                                ))
                                            }  
                                            
                                    </BarChart> 
                                  </ResponsiveContainer>    
  
                        </div> 
                                    
                    </WidgetWrapper>
     
                </>
        )
    };

    


/**
 * Register as a Widget
 */
registerWidget({
    id: "IHIS",
    widget: IHISWidget,
    configs: {
        layout: {
            // w: 12,
            // h: 12,
            // minH: 12,
            // minW: 12
        }
    }
});



registerWidget({
    id: "TimeDispense", 
    widget: TimeDispense,
    configs: {
        layout: {
            // w: 12,
            // h: 12,
            // minH: 12,
            // minW: 12
        }
    }
});


registerWidget({
    id: "LastestDischarges",
    widget: LastestDischarges,
    configs: {
        layout: {
            // w: 12,
            // h: 12,
            // minH: 12,
            // minW: 12
        }
    }
});



registerWidget({
    id: "DispenseItem", 
    widget: DispenseItem,
    configs: {
        layout: {
            // w: 12,
            // h: 12,
            // minH: 12,
            // minW: 12
        }
    }
});


/**
 * Register as a Sidebar Link
 */
/*
registerLink({
    id: "IHIS",
    label: "IHIS",
    // click: () => alert("Hello"),
    component: IHISWidget
});
*/

/**
 * Register as a UI
 */

 /*
registerUI({
    id:"IHIS",
    component: IHISWidget
});
*/