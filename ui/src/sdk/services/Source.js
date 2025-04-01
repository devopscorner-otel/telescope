import HTTP from '@/utils/http'

const http = new HTTP()

class SourceService {
    createSource = async (data) => {
        let response = await http.Post('/ui/v1/sources', data)
        return response
    }
    deleteSource = async (sourceSlug) => {
        let response = await http.Delete(`/ui/v1/sources/${sourceSlug}`)
        return response
    }
    updateSource = async (sourceSlug, data) => {
        let response = await http.Patch(`/ui/v1/sources/${sourceSlug}`, data)
        return response
    }
    getSource = async (sourceSlug) => {
        let response = await http.Get(`/ui/v1/sources/${sourceSlug}`)
        return response
    }
    getSources = async () => {
        let response = await http.Get('/ui/v1/sources')
        return response
    }
    getSourceRoleBindings = async (sourceSlug) => {
        let response = await http.Get(`/ui/v1/sources/${sourceSlug}/roleBindings`)
        return response
    }
    testConnection = async (kind, connectionData) => {
        let response = await http.Post(`/ui/v1/services/testSourceConnection/${kind}`, connectionData)
        return response
    }
    grantSourceRole = async (sourceSlug, user, group, role) => {
        let data = {
            'subject': {
                'kind': null,
                'name': null,
            },
            'role': role.name,
        }
        if (user != null) {
            data['subject'] = { 'kind': 'user', 'name': user.username }
        }
        if (group != null) {
            data['subject'] = { 'kind': 'group', 'name': group.name }
        }
        let response = await http.Post(`/ui/v1/sources/${sourceSlug}/grantRole`, data)
        return response
    }
    revokeSourceRole = async (sourceSlug, user, group, role) => {
        let data = {
            'subject': {
                'kind': null,
                'pk': null,
            },
            'role': role,
        }
        if (user != null) {
            data['subject'] = { 'kind': 'user', 'name': user.username }
        }
        if (group != null) {
            data['subject'] = { 'kind': 'group', 'name': group.name }
        }
        let response = await http.Post(`/ui/v1/sources/${sourceSlug}/revokeRole`, data)
        return response
    }
    getData = async (sourceSlug, params) => {
        let response = await http.Post(`/ui/v1/sources/${sourceSlug}/data`, params)
        return response
    }
    getGraphData = async (sourceSlug, params) => {
        let response = await http.Post(`/ui/v1/sources/${sourceSlug}/graphData`, params)
        return response
    }
    autocomplete = async (sourceSlug, params) => {
        let response = await http.Post(`/ui/v1/sources/${sourceSlug}/autocomplete`, params)
        return response
    }
    getContextFieldData = async (sourceSlug, params) => {
        let response = await http.Post(`/ui/v1/sources/${sourceSlug}/contextFieldData`, params)
        return response
    }
}

export { SourceService }