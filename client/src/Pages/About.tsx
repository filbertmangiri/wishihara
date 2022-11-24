import React, { FC } from 'react';
import { Badge, Button, Card, Checkbox, Mask, Table } from 'react-daisyui';


type AboutProps = {};

const Home: FC<AboutProps> = (props) => {
  return (
    <div className='flex justify-center items-center w-full h-full'>
        <div className='overflow-x-auto'>
            <Table className="rounded-box">
                <Table.Head>
                <span>Name</span>
                <span>NIM</span>
                <span />
                </Table.Head>

                <Table.Body>
                <Table.Row>
                    <div className="flex items-center space-x-3 truncate">
                    <Mask
                        variant="squircle"
                        
                    />
                    <div>
                        <div className="font-bold">Hansen Dharma Tangtobing Tjoa</div>
                        <div className="text-sm opacity-50">Hansen</div>
                    </div>
                    </div>
                    <div>
                    000 000 43288
                    <br />
                    </div>
                    <Button color="ghost" size="xs">
                    details
                    </Button>
                </Table.Row>

                <Table.Row>
                    <div className="flex items-center space-x-3 truncate">
                    <Mask
                        variant="squircle"
                        src="http://daisyui.com/tailwind-css-component-profile-2@56w.png"
                    />
                    <div>
                        <div className="font-bold">Filbert Mangiri</div>
                        <div className="text-sm opacity-50">Filbert</div>
                    </div>
                    </div>
                    <div>
                    000 000 50612
                    <br />
                    </div>
                    <Button color="ghost" size="xs">
                    details
                    </Button>
                </Table.Row>

                <Table.Row>
                    <div className="flex items-center space-x-3 truncate">
                    <Mask
                        variant="squircle"
                        src="http://daisyui.com/tailwind-css-component-profile-2@56w.png"
                    />
                    <div>
                        <div className="font-bold">Casey Tjiptadjaja</div>
                        <div className="text-sm opacity-50">Casey</div>
                    </div>
                    </div>
                    <div>
                    000 000 45957
                    <br />
                    </div>
                    <Button color="ghost" size="xs">
                    details
                    </Button>
                </Table.Row>

                <Table.Row>
                    <div className="flex items-center space-x-3 truncate">
                    <Mask
                        variant="squircle"
                        src="http://daisyui.com/tailwind-css-component-profile-2@56w.png"
                    />
                    <div>
                        <div className="font-bold">Hillario Zidan</div>
                        <div className="text-sm opacity-50">Zidan</div>
                    </div>
                    </div>
                    <div>
                    000 000 50745
                    <br />
                    </div>
                    <Button color="ghost" size="xs">
                    details
                    </Button>
                </Table.Row>

                <Table.Row>
                    <div className="flex items-center space-x-3 truncate">
                    <Mask
                        variant="squircle"
                        src="http://daisyui.com/tailwind-css-component-profile-2@56w.png"
                    />
                    <div>
                        <div className="font-bold">Timothy</div>
                        <div className="text-sm opacity-50">Timothy</div>
                    </div>
                    </div>
                    <div>
                    000 000 000000
                    <br />
                    </div>
                    <Button color="ghost" size="xs">
                    details
                    </Button>
                </Table.Row>
                </Table.Body>

                <Table.Footer>
                <span>Name</span>
                <span>NIM</span>
                <span>&nbsp;</span>
                </Table.Footer>
            </Table>
        </div>
    </div>
  )
   
};

export default Home;
