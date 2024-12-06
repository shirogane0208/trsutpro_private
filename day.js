javascript: (
    function main() {
        let first_message = `
            [勤怠入力くん]
            日次の勤怠を10:00 - 17:30で入力するよ
            日付を入力してください
            format: yyyymmdd
        `;

        let date_str = prompt(first_message);

        if (date_str == false) {
            alert('停止しました');
            return 'cancel'
        }else if (date_str == ""){
            alert('日付を入力してください')
            return 'input date error'
        }

        let secound_message = `
            在宅勤務でしたか？
            ok: はい
            キャンセル: いいえ
        `;

        let remote_work = confirm(secound_message);
        

        let year = date_str.slice(0, 4);
        let month = date_str.slice(4, 6);
        let day = date_str.slice(6, 8);
        
        let day_element = document.getElementById('kinmu_date');
        day_element.value = (year + '/' + month + '/' + day);

        let start_hour = document.getElementById("shukkin_time_hour");
        let start_hour_target_option = start_hour.querySelector(`option[value="10"]`);
        start_hour_target_option.selected = true;

        let start_minute = document.getElementById("shukkin_time_min");
        let start_minute_target_option = start_minute.querySelector(`option[value="0"]`);
        start_minute_target_option.selected = true;

        let end_hour = document.getElementById("taikin_time_hour");
        let end_hour_target_option = end_hour.querySelector(`option[value="18"]`);
        end_hour_target_option.selected = true;

        let end_minute = document.getElementById("taikin_time_min");
        let end_minute_target_option = end_minute.querySelector(`option[value="30"]`);
        end_minute_target_option.selected = true;

        let work_location = document.getElementById('kinmu_area')

        if (remote_work == True){
            let result_location = work_location.querySelector(`option[value="在宅勤務"]`);
            result_location.selected = true;
        }else if (remote_work == False){
            let result_location = work_location.querySelector(`option[value="通常勤務"]`);
            result_location.selected = true;
        }else{
            alert('internal error')
            return 'internal error'
        }
    }
)();