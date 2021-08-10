import { ref, onMounted, computed } from 'vue'
import { getContacts } from './../service/ContactsService'

export default function useContacts() {
    const search = ref('')
    const isLoading = ref(false)

    const contacts = ref([])
    async function fetchContacts() {
        try {
            isLoading.value = true
            contacts.value = await getContacts()
        } catch (error) {
            console.log(error)
        } finally {
            isLoading.value = false
        }
    }
    const filteredContacts = computed(() => {
        return contacts.value.filter(contact => {
            const fullName = `${contact.firstName} ${contact.lastName}`
            return fullName.toLowerCase()
        })
    })
    onMounted(fetchContacts)

    return {
        isLoading,
        filteredContacts,
        search
    }
}