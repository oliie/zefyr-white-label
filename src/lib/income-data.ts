import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// let ready = false;
// let income = '100000';
// let insurance = '1000';
// let pension = '2000';
// let savings = '5000';
// let vacation = 1500;
// let totalExpenses = 0;
// let car: number;

const initialData = {
	income: '100000',
	insurance: '1000',
	pension: '2000',
	savings: '5000',
	vacationChoice: 1,
	carChoice: 0,
	expenses: [
		{
			label: 'Dator',
			value: ''
		},
		{
			label: 'Mobil',
			value: ''
		},
		{
			label: 'Mobilabonnemang',
			value: ''
		},
		{
			label: 'Utbildning',
			value: ''
		},
		{
			label: 'Friskvård',
			value: ''
		}
	]
};

const incomeData = writable(
	browser && localStorage.getItem('data')
		? JSON.parse(localStorage.getItem('data')) ?? initialData
		: initialData
);

incomeData.subscribe((value) => {
	if (browser) {
		localStorage.setItem('data', JSON.stringify(value));
	}
});

export { incomeData };
