javascript: (
    function main() {
        let first_message = `
            [勤怠入力くん]
            日次の勤怠を10:00 - 17:30で入力するよ
            日付を入力してください
            format: yyyymmdd
        `;

        let secound_message = `
            在宅勤務でしたか？
        `;

        let remote_work = confirm(secound_message)
        
        let date_str = prompt(first_message);
        
        const year = date_str.slice(0, 4);
        const month = date_str.slice(4, 6);
        const day = date_str.slice(6, 8);
        // date id kinmu_date
    }
)();