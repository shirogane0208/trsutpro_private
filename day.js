javascript: (
    function main() {

        function input_value(id_name,value_name){
            let element = document.getElementById(id_name);
            let element_target_option = start_hour.querySelector(`option[value=${value_name}]`);
            option_false(element)
            element_target_option.selected = true;
        }

        function option_false(element){
            for (const option of element.options) {
                option.selected = false;
            }
        }

        let first_message = `
            [勤怠入力くん]
            日次の勤怠を10:00 - 17:30で入力するよ
            日付を入力してください
            format: yyyymmdd
        `;

        let date_str = prompt(first_message);
        
        let pattern = /^\d{8}$/;

        if (date_str == null){
            alert('停止しました')
            return 'cancel'
        }else if (!pattern.test(date_str)) {
            alert_message = `
            入力が正しくないようです
            input: ${date_str}
            `
            alert(alert_message)
            return 'input error'
        }

        let secound_message = `
            在宅勤務でしたか？
            ok: はい
            キャンセル: いいえ
        `;

        let remote_work = confirm(secound_message);

        console.log(remote_work)
        

        let year = date_str.slice(0, 4);
        let month = date_str.slice(4, 6);
        let day = date_str.slice(6, 8);
        
        let day_element = document.getElementById('kinmu_date');
        day_element.value = (year + '/' + month + '/' + day);

        input_value("shukkin_time_hour","10");
        input_value("shukkin_time_min","0");
        input_value("taikin_time_hour","18");
        input_value("taikin_time_min","30");

        let work_location = document.getElementById('kinmu_area')
        option_false(work_location)

        if (remote_work == true){
            let result_location = work_location.querySelector(`option[value="在宅勤務"]`);
            result_location.selected = true;
        }else if (remote_work == false){
            let result_location = work_location.querySelector(`option[value="通常勤務"]`);
            result_location.selected = true;
        }else{
            alert('internal error')
            return 'internal error'
        }
    }
)();