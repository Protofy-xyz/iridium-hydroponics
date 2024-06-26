/* @my/ui is wrapper for tamagui. Any component in tamagui can be imported through @my/ui
use result = await API.get(url) or result = await API.post(url, data) to send requests
API.get/API.post will return a PendingResult, with properties like isLoaded, isError and a .data property with the result
if you call paginated apis, you will need to wait for result.isLoaded and look into result.data.items, since result.data is an object with the pagination.
Paginated apis return an object like: {"itemsPerPage": 25, "items": [...], "total": 20, "page": 0, "pages": 1}
*/

import { Protofy } from 'protolib/base'
import { Objects } from 'app/bundles/objects'
import { DataView, AdminPage, SSR, withSession } from 'protolib'
import React from 'react'
import { Router } from '@tamagui/lucide-icons';
import { DevicesModel } from 'protolib/bundles/devices/devices';

const isProtected = Protofy("protected", false)
const { name, prefix } = Objects.plant.getApiOptions()
const sourceUrl = prefix + name

export default {
  route: Protofy("route", "/workspace/dev/plant"),
  component: ({ pageState, initialItems, pageSession, extraData }: any) => {
    return (<AdminPage title="plant" pageSession={pageSession}>
      <DataView
        defaultView={"list"}
        integratedChat
        rowIcon={Router}
        sourceUrl={sourceUrl}
        initialItems={initialItems}
        name="plant"
        model={DevicesModel}
        pageState={pageState}
      />
    </AdminPage>)
  },
  getServerSideProps: SSR(async (context) => withSession(context, isProtected ? Protofy("permissions", []) : undefined))
}