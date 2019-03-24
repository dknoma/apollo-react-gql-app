import React from 'react'
import { SidebarTable, SidebarTd, SidebarTr } from '../styles/sidebar'

export class Sidebar extends React.Component { 
    constructor(props) {
        super(props)
        
        this.state = {
        }
    }
    render() {
        return (
            <SidebarTable><SidebarTd><SidebarTr>
            <div>
                <table>
                    <tr>
                        <td><a className="menu-item" href="/">
                            Home
                        </a></td>
                    </tr>
                    <tr>
                        <td><a className="menu-item" href="/signup">
                            Signup
                        </a></td>
                    </tr>
                </table>
            </div>
            </SidebarTr></SidebarTd></SidebarTable>
        )
    }
}

export default Sidebar