import React, { useState } from 'react'
import APIGroups from '../API/groups'
import FormCreateGroup from '../components/groupsPage/FormCreateGroup'
import TableGroups from '../components/groupsPage/TableGroups'

const Groups = () => {
  const [groups, setGroups] = useState([])

  const deleteGroup = async (groupName) => {
    await APIGroups.deleteGroup(groupName)
    setGroups(groups.filter(item => item.name != groupName))
  }
  return (
    <div>
      <FormCreateGroup></FormCreateGroup>
      <TableGroups
        deleteGroup={deleteGroup}
      ></TableGroups>
    </div>
  )
}

export default Groups