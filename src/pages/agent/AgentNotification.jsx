import React from 'react'
import {FaBell} from 'react-icons/fa'

import AgentProfileLayout from "../../layouts/AgentProfileLayout";
import {messages} from '../../database/messages'

const AgentNotification = () => {
  return (
		<AgentProfileLayout>
	
			<h1 className="text-xl text-pur md:text-2xl font-bold flex items-center gap-3">
				Notifications <FaBell size={20}/>
			</h1>
      <section className='py-10'>
<div>
  {messages.map()}
</div>
      </section>
		</AgentProfileLayout>
  );
}

export default AgentNotification