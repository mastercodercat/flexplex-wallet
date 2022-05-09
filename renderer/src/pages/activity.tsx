import React from 'react';
import ActivityView from '@/views/activityView';
import GameplexLoader from '@/components/GameplexLoader'

import NavigationStore from '@/store/NavigationStore'

function Activity() {
  NavigationStore.active('Activity');

  return (
    <React.Fragment>
      <div className='mx-3 mb-3 rounded-xl bg-[#121212]'>
        <div className="container mx-auto min-h-[90vh]">
          {/* Main Area */}
          <ActivityView></ActivityView>
           
        </div>
      </div>
    </React.Fragment>
  )
}

export default Activity
