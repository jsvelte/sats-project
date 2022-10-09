import { NextPage } from 'next'
import React, { FC } from 'react'

import UnderConstruction from '~/utils/UnderConstruction'
import AdminLayout from '~/components/templates/AdminLayout'

const Dashboard: NextPage = (): JSX.Element => {
  return (
    <AdminLayout metaTitle="Administrator | Dashboard">
      <UnderConstruction />
    </AdminLayout>
  )
}

export default Dashboard
